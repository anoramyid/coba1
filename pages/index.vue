<template>
  <div style="max-width: 1200px; margin: 0 auto;">
    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #81c784 0%, #4caf50 50%, #388e3c 100%); color: white; padding: 4rem 2rem; text-align: center; border-radius: 1rem; margin-bottom: 3rem; box-shadow: 0 10px 30px rgba(76,175,80,0.3); position: relative; overflow: hidden;">
      <h1 style="font-size: 3rem; margin-bottom: 1rem; text-shadow: 0 4px 8px rgba(0,0,0,0.3); position: relative; z-index: 1;">🌟 Selamat Datang di SD Hijau Indah! 🌟</h1>
      <p style="font-size: 1.5rem; margin-bottom: 2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3); position: relative; z-index: 1;">Sekolah Dasar Ramah Anak dengan Tema Hijau yang Menyenangkan!</p>
      <p style="font-size: 1.2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3); position: relative; z-index: 1;">Belajar sambil bermain, tumbuh bersama alam! 🍃</p>
    </div>

    <!-- About Section -->
    <div style="background: linear-gradient(135deg, #ffffff 0%, #f8fdf8 100%); padding: 3rem; border-radius: 1rem; margin-bottom: 3rem; box-shadow: 0 8px 25px rgba(0,0,0,0.1); border: 2px solid #e8f5e8;">
      <h2 style="color: #2e7d32; text-align: center; font-size: 2.5rem; margin-bottom: 2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">Tentang Kami</h2>
      <p style="text-align: center; font-size: 1.2rem; line-height: 1.8; color: #424242; max-width: 800px; margin: 0 auto;">
        SD Hijau Indah adalah sekolah dasar yang mengutamakan pendidikan holistik dengan tema hijau yang ramah lingkungan.
        Kami percaya bahwa anak-anak belajar terbaik melalui pengalaman menyenangkan dan interaksi dengan alam.
        Bergabunglah dengan komunitas kami yang penuh keceriaan! 🎓🌱
      </p>
    </div>

    <!-- Features Section -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
      <div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); padding: 2.5rem; border-radius: 1rem; text-align: center; box-shadow: 0 8px 25px rgba(76,175,80,0.2); border: 2px solid #a5d6a7; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">📖</div>
        <h3 style="color: #2e7d32; font-size: 1.5rem; margin-bottom: 1rem;">Pembelajaran Interaktif</h3>
        <p style="color: #424242; line-height: 1.6;">Kelas-kelas menarik dengan metode belajar yang fun dan inovatif untuk anak-anak.</p>
      </div>
      <div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); padding: 2.5rem; border-radius: 1rem; text-align: center; box-shadow: 0 8px 25px rgba(76,175,80,0.2); border: 2px solid #a5d6a7; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🌳</div>
        <h3 style="color: #2e7d32; font-size: 1.5rem; margin-bottom: 1rem;">Lingkungan Hijau</h3>
        <p style="color: #424242; line-height: 1.6;">Taman sekolah yang indah untuk bermain dan belajar tentang alam.</p>
      </div>
      <div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); padding: 2.5rem; border-radius: 1rem; text-align: center; box-shadow: 0 8px 25px rgba(76,175,80,0.2); border: 2px solid #a5d6a7; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">👨‍👩‍👧‍👦</div>
        <h3 style="color: #2e7d32; font-size: 1.5rem; margin-bottom: 1rem;">Komunitas Ramah</h3>
        <p style="color: #424242; line-height: 1.6;">Guru dan staf yang peduli, serta teman-teman baru yang menyenangkan.</p>
      </div>
    </div>

    <!-- Test Connection -->
    <div style="background: linear-gradient(135deg, #ffffff 0%, #f8fdf8 100%); padding: 3rem; border-radius: 1rem; box-shadow: 0 8px 25px rgba(0,0,0,0.1); border: 2px solid #e8f5e8;">
      <h2 style="color: #2e7d32; text-align: center; font-size: 2rem; margin-bottom: 2rem;">Test Koneksi Database</h2>
      <div style="text-align: center;">
        <button @click="testConnection" style="background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%); color: white; padding: 1rem 2rem; border-radius: 2rem; border: none; font-size: 1.1rem; font-weight: 600; cursor: pointer; box-shadow: 0 4px 15px rgba(76,175,80,0.3); transition: all 0.3s ease;">
          🔍 Test Sekarang
        </button>
        <div v-if="connectionStatus" style="margin-top: 2rem; padding: 1rem; border-radius: 0.5rem; background: rgba(76,175,80,0.1);">
          <p style="font-weight: bold; color: #2e7d32; margin-bottom: 0.5rem;">Status: {{ connectionStatus.status }}</p>
          <p v-if="connectionStatus.detail" style="color: #d32f2f; margin: 0;">Detail: {{ connectionStatus.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const connectionStatus = ref(null)

const testConnection = async () => {
  try {
    connectionStatus.value = await $fetch('/api/data')
  } catch (error) {
    connectionStatus.value = { status: 'Error', detail: error.message }
  }
}
</script>

<style scoped>
h1 { color: #00dc82; }
.test-connection {
  margin-top: 20px;
}
button {
  background-color: #00dc82;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>