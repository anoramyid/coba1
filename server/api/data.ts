import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  try {
    // Membaca URL dari .env
    const config = useRuntimeConfig()
    const connection = await mysql.createConnection(config.databaseUrl as string)
    
    // Test query sederhana
    const [rows] = await connection.query('SELECT "Koneksi Berhasil" as status')
    await connection.end() // Selalu tutup koneksi setelah selesai
    
    const rowsArray = rows as any[]
    return rowsArray[0]
  } catch (error) {
    // Jika gagal, tampilkan pesan errornya
    return { status: "Gagal Koneksi", detail: (error as Error).message }
  }
})