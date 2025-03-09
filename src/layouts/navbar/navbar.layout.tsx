import { WorldTranslate } from "../../assets/icons";
import { Caption } from "../../components/caption.component/caption.component";
import { LogoWalliPaieImage } from "../../components/common/logoWalliPaie";

const Navbar = () => {
  return (
    <nav className="flex relative justify-between items-center w-full h-[60px] border-[#E5E8EB] border-[1px] px-2">
      {/* Logo */}
      <div className="w-[122px] h-[54px]">
        <LogoWalliPaieImage className="w-full h-full object-cover" />
      </div>

      {/* Sélecteur de langue */}
      <div className="flex items-center gap-1 cursor-pointer">
        <WorldTranslate size={24} />
        <Caption tag="span" text="Fr" type={4} />
      </div>
    </nav>
  );
};

export default Navbar;
