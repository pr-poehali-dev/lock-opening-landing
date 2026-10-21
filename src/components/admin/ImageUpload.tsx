import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Props {
  label: string;
  onUpload: (file: File) => Promise<string>;
  onDone: (url: string) => void;
}

export default function ImageUpload({ label, onUpload, onDone }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handle = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    setError("");
    try {
      for (const file of Array.from(files)) {
        onDone(await onUpload(file));
      }
    } catch {
      setError("Не удалось загрузить фото");
    }
    setBusy(false);
    if (ref.current) ref.current.value = "";
  };

  return (
    <div>
      <input ref={ref} type="file" accept="image/*" multiple className="hidden" onChange={(e) => handle(e.target.files)} />
      <Button type="button" variant="outline" disabled={busy} onClick={() => ref.current?.click()}>
        <Icon name="Upload" size={16} className="mr-2" />
        {busy ? "Загружаю..." : label}
      </Button>
      {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
    </div>
  );
}
