import { NextResponse } from 'next/server'

export async function POST(request: any) {
  if (request.method === 'POST') {
    try {
      const data = await request.json();
      console.log('URL recibido:', data.url); // Asegúrate de que el campo sea 'url'

      // Aquí puedes procesar 'data.url' según tus necesidades

      return NextResponse.json({ shortURL: 'URL procesado correctamente' });
    } catch (error) {
      console.error('Error al procesar el JSON:', error);
      return NextResponse.json({ error: 'Error al procesar el JSON' }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
  }
}
