// src/components/NarcisosAmarillos.tsx

export default function NarcisosAmarillos() {
    const Narciso = ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 90 Q45 70 50 50 Q55 70 50 90" fill="#4CAF50" stroke="#45a049" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" fill="#FF9800" />
            {[...Array(6)].map((_, i) => (
                <path
                    key={i}
                    d="M50 50 L50 30 Q55 25 60 30 L50 50"
                    fill="#FFEB3B"
                    stroke="#FDD835"
                    strokeWidth="1"
                    transform={`rotate(${i * 60} 50 50)`}
                />
            ))}
        </svg>
    );

    return (
        <div className="p-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg">
            {/* Aquí usamos flex-wrap para asegurar que las flores no se apilen */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="flex items-center">
                        {/* Cambia el tamaño de las flores para que sean más pequeñas */}
                        <Narciso className={`w-12 h-12 ${index % 2 ? 'animate-sway-slow' : 'animate-sway-fast'}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
