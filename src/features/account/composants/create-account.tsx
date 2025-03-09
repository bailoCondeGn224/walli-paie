import { useState } from "react";
import { Button } from "../../../components/button/button.component";
import { Caption } from "../../../components/caption.component/caption.component";
import { Input } from "../../../components/input/input.component";
import { Select } from "../../../components/input/select.component";

function CreateAccount() {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name); // Mettez à jour le nom du fichier
    }
  };

  return (
    <div className="flex items-start bg-[#FFFFFF] overflow-auto max-h-[85vh]">
      <div className="rounded-lg w-2/3">
        <Caption
          tag={"h1"}
          text="Création du compte de l'entreprise"
          type={1}
        />
        <form className="space-y-4 mt-5">
          <div className="grid grid-cols-2 gap-4">
            <Input type="text" placeholder="Nom" />
            <Input type="text" placeholder="Prénom" className="input-field" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input type="email" placeholder="Email" className="input-field" />
            <Input
              type="date"
              placeholder="Date de naissance"
              className="input-field"
            />
          </div>
          <Select className="input-field">
            <option>Sexe</option>
            <option>Masculin</option>
            <option>Féminin</option>
          </Select>
          <Caption tag="h2" text=" Information de la société" type={2} />
          <Input
            type="text"
            placeholder="Nom de la société"
            className="input-field"
          />
          <Input
            type="text"
            placeholder="Forme juridique"
            className="input-field"
          />
          <Input
            type="text"
            placeholder="Numéro RCCM"
            className="input-field"
          />
          <Input
            type="text"
            placeholder="Secteur d'activité"
            className="input-field"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Siège social"
              className="input-field"
            />
            <Input
              type="text"
              placeholder="Adresse professionnelle"
              className="input-field"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Téléphone de la société"
              className="input-field"
            />
            <Input
              type="text"
              placeholder="Téléphone professionnel"
              className="input-field"
            />
          </div>
          <div className="border-dashed border-2 border-green-900 p-4 rounded-lg text-center">
            <Caption
              tag="p"
              text="Télécharger une photo de votre passeport ou carte d'identité"
              type={4}
            />
            <label className="cursor-pointer bg-[#E8F2E8] text-[#0D1C0D] px-4 py-2 rounded-lg mt-2 inline-block">
              {fileName || "Choisir un fichier"}{" "}
              <Input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button label="Annuler" variant="secondary" />
            <Button label="Enregistrer" variant="primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
