import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

interface FormValues {
  naam: string;
  email: string;
  telefoon: string;
  bedrijf: string;
  bericht: string;
}

interface FormErrors {
  naam?: string;
  email?: string;
  telefoon?: string;
  bericht?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyValues: FormValues = { naam: "", email: "", telefoon: "", bedrijf: "", bericht: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.naam.trim()) {
    errors.naam = "Vul je naam in, dan weten wij met wie wij praten.";
  }
  if (!values.email.trim()) {
    errors.email = "Wij hebben je e-mailadres nodig om te kunnen reageren.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Hmm, dit e-mailadres lijkt niet te kloppen. Check 'm even?";
  }
  if (!values.telefoon.trim()) {
    errors.telefoon = "Laat je telefoonnummer achter, dan kunnen wij je terugbellen.";
  }
  if (!values.bericht.trim()) {
    errors.bericht = "Vertel kort waar wij je mee kunnen helpen.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  // Honeypot: bots vullen dit verborgen veld vaak in; mensen niet.
  const [honeypot, setHoneypot] = useState("");

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  function update(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Spam? Doe alsof het gelukt is en stop.
    if (honeypot) {
      setStatus("success");
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // TODO: zonder VITE_WEB3FORMS_KEY (zie .env) kan er niets verzonden worden.
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Nieuw bericht via brandandboost.nl",
          from_name: "Brand & Boost website",
          name: values.naam,
          email: values.email,
          telefoon: values.telefoon,
          bedrijf: values.bedrijf || "Niet opgegeven",
          message: values.bericht,
          replyto: values.email,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setValues(emptyValues);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-soft" role="status">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-heading text-xl font-bold text-antraciet">Bedankt voor je bericht!</h3>
        <p className="mt-2 text-muted-foreground">Bedankt, wij nemen snel contact met je op.</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Nog een bericht sturen
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot - verborgen voor mensen, niet voor bots */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
        <label htmlFor="bedrijfsnaam-extra">Laat dit veld leeg</label>
        <input
          id="bedrijfsnaam-extra"
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="naam">
            Naam <span className="text-primary">*</span>
          </Label>
          <Input
            id="naam"
            name="naam"
            autoComplete="name"
            value={values.naam}
            onChange={(e) => update("naam", e.target.value)}
            aria-invalid={Boolean(errors.naam)}
            aria-describedby={errors.naam ? "naam-error" : undefined}
            required
          />
          {errors.naam && (
            <p id="naam-error" role="alert" className="text-sm font-medium text-destructive">
              {errors.naam}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">
            E-mail <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-sm font-medium text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="telefoon">
            Telefoon <span className="text-primary">*</span>
          </Label>
          <Input
            id="telefoon"
            name="telefoon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.telefoon}
            onChange={(e) => update("telefoon", e.target.value)}
            aria-invalid={Boolean(errors.telefoon)}
            aria-describedby={errors.telefoon ? "telefoon-error" : undefined}
            required
          />
          {errors.telefoon && (
            <p id="telefoon-error" role="alert" className="text-sm font-medium text-destructive">
              {errors.telefoon}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="bedrijf">Bedrijf</Label>
          <Input
            id="bedrijf"
            name="bedrijf"
            autoComplete="organization"
            value={values.bedrijf}
            onChange={(e) => update("bedrijf", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="bericht">
          Bericht <span className="text-primary">*</span>
        </Label>
        <Textarea
          id="bericht"
          name="bericht"
          value={values.bericht}
          onChange={(e) => update("bericht", e.target.value)}
          placeholder="Waar kunnen wij je mee helpen?"
          aria-invalid={Boolean(errors.bericht)}
          aria-describedby={errors.bericht ? "bericht-error" : undefined}
          required
        />
        {errors.bericht && (
          <p id="bericht-error" role="alert" className="text-sm font-medium text-destructive">
            {errors.bericht}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
          Er ging iets mis bij het versturen. Probeer het zo nog eens of mail ons direct via{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Even versturen…
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" />
              Verstuur bericht
            </>
          )}
        </Button>
        <p className="text-sm text-muted-foreground">
          Velden met <span className="text-primary">*</span> zijn verplicht.
        </p>
      </div>
    </form>
  );
}
