'use client';
export default function ComponentTest({ sponsors, callback }) {
  const handleClick = async () => {
    let infoFromBackend = await callback('Hallo');
    alert(infoFromBackend);
  };

  return (
    <>
      Ich bin eine Componente
      {JSON.stringify(sponsors)}
      <button onClick={handleClick}>Ich bin ein Callback zum Backend</button>
    </>
  );
}
