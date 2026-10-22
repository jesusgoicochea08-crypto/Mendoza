function HeaderPagina({ titulo, nombreInstitucion }) {
  return (
    <>
      <header>
        <h1>{titulo}</h1>
        <p>{nombreInstitucion}</p>
      </header>
    </>
  )
}

export default HeaderPagina