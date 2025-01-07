import Header from "@/components/header/Header";


export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
        <Header />
        {children}
    </>

  );
}

// É possivel criar layouts personalizados para as paginas de acordo com suas rotas
// ao criar arquivo layout dentro de uma pasta todos as paginas dentro da pasta
// irão aplicar o layout preestabelecido
