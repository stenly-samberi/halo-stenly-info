 // JavaScript untuk menangani scroll otomatis saat menu diklik
 document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.wrapper-nav a');
    
    for (const link of menuLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Menghentikan perilaku default dari tautan
    
        const targetId = this.getAttribute('href').slice(1); // Mengambil id target dari tautan
        const targetElement = document.getElementById(targetId); // Mendapatkan elemen target
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Menggulir otomatis ke elemen target
        }
      });
    }
  });


