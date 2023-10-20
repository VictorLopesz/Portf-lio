import Link from 'next/link';
import react from 'react';

const Header = () => {
    return (
        <div
            className="
        m-0 p-4 shadow-lg
        flex justify-between
        ">
            <div
                className="
              ml-9 font-sacramentos 
              text-[40px]
             ">
                Victor Lopes
            </div>

            <div
                className="
            flex items-center 
            justify-evenly uppercase
            text-base font-sansnarrow
             mr-9
           
            ">
                <Link
                    href={''}
                    className="p-1"
                >
                    Início
                </Link>
                <Link
                    href={''}
                    className="p-1"
                >
                    Sobre mim
                </Link>
                <Link
                    href={''}
                    className="p-1"
                >
                    Skills
                </Link>
                <Link
                    href={''}
                    className="p-1"
                >
                    Portfólio
                </Link>
                <Link
                    href={''}
                    className="p-1"
                >
                    Cursos
                </Link>
                <Link
                    href={''}
                    className="p-1"
                >
                    Contatos
                </Link>
            </div>
        </div>
    );
};


export default Header;