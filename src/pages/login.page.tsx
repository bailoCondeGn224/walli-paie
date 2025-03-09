import loginImage from "../assets/images/loginImage.png";
import { Input } from "../components/input/input.component";
import { Button } from "../components/button/button.component";
import { Caption } from "../components/caption.component/caption.component";
import { partenerBank } from "../helpers/partener-bank";
import Navbar from "../layouts/navbar/navbar.layout";
const LoginPage = () => {
  return (
    <div className="w-full bg-[#FFFFFF] ">
      <Navbar />
      <div className="flex">
        <div className="w-2/5 mx-2">
          <div className="h-[225px] w-full flex justify-center items-center">
            <img
              src={loginImage}
              alt="Illustration"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <form className="mt-4">
              <Input label="Email" type="text" />
              <Input label="Mot de passe" type="password" />
              <Button
                label="➜ Se connecter"
                className="w-full items-center mt-[8px]"
              />
              <div>
                <Caption
                  tag="p"
                  text="Mot de passe oublié ?"
                  type={4}
                  className="text-[#4F944F] mt-[8px] cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1">
          <Caption
            tag="h1"
            text="Bienvue a walli paie"
            type={1}
            className="font-bold"
          />
          <Caption
            tag="p"
            text="Walli Paie est une plateforme de gestion financière conçue pour un usage professionnel. Connectez-vous pour accéder à votre compte."
            type={4}
            className="my-[8px] "
          />
          <Caption
            tag="h2"
            text="Les banques partenaires"
            type={2}
            className="mb-[8px] "
          />
          <div className="w-[calc(100%-23px)] border-[1px] border-[#D1E5D1] h-[300px]">
            <div className="grid grid-cols-6 gap-4 mt-4">
              {partenerBank.map((bank, index) => (
                <img key={index} src={bank.image} alt={bank.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
