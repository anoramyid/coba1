export default defineEventHandler((event) => {
  return {
    status: "success",
    message: "Data ini dikirim dari Backend (Server)",
    waktu: new Date().toISOString()
  }
})