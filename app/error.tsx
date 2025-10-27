"use client";

import { useEffect } from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/20 rounded-full">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <h2 className="text-xl text-default-600 mb-6">
          Etwas ist schiefgelaufen
        </h2>

        <p className="text-default-500 mb-8">
          {error.message || "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut."}
        </p>

        <div className="flex gap-4 flex-col sm:flex-row justify-center">
          <Button
            color="primary"
            onPress={() => reset()}
            size="lg">
            Erneut versuchen
          </Button>
          <Button
            as={Link}
            href="/"
            variant="bordered"
            size="lg">
            Zur Startseite
          </Button>
        </div>
      </div>
    </div>
  );
}
