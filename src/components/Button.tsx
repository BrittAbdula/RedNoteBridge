import Link from 'next/link';

interface ButtonProps {
    href: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, children }) => {
    return (
        <Link href={href} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
            {children}
        </Link>
    );
}; 