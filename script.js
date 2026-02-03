console.log('Akwadra Super Builder Initialized');

// --- Data Simulation ---

const destinations = [
    {
        id: 1,
        name: 'العلا، السعودية',
        image: 'https://images.unsplash.com/photo-1545079203-b097b5be3d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        count: '15 رحلة متاحة'
    },
    {
        id: 2,
        name: 'البتراء، الأردن',
        image: 'https://images.unsplash.com/photo-1579606038865-c70e28328286?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        count: '8 رحلات متاحة'
    },
    {
        id: 3,
        name: 'دبي، الإمارات',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea932a23518?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        count: '24 رحلة متاحة'
    },
    {
        id: 4,
        name: 'القاهرة، مصر',
        image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        count: '12 رحلة متاحة'
    }
];

const packages = [
    {
        id: 1,
        title: 'سحر الصحراء في العلا',
        location: 'العلا، السعودية',
        price: '4500 ر.س',
        duration: '3 أيام / 2 ليلة',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1626017260580-c25227d82585?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: 'اكتشف جمال الطبيعة والتاريخ في العلا، حيث تلتقي الحضارات القديمة مع سحر الصحراء.',
        itinerary: [
            { day: 'اليوم الأول', title: 'الوصول والاستقبال', detail: 'الاستقبال في المطار والتوجه للفندق، ثم جولة مسائية في البلدة القديمة.' },
            { day: 'اليوم الثاني', title: 'جولة الحجر التاريخية', detail: 'زيارة موقع الحجر الأثري (مدائن صالح) وصخرة الفيل مع غداء تقليدي.' },
            { day: 'اليوم الثالث', title: 'المغادرة', detail: 'جولة حرة للتسوق ثم التوصيل للمطار.' }
        ]
    },
    {
        id: 2,
        title: 'مغامرة البتراء الوردية',
        location: 'البتراء، الأردن',
        price: '3200 ر.س',
        duration: '4 أيام / 3 ليالي',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1596422328157-1909772c3546?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: 'رحلة عبر الزمن إلى المدينة الوردية المنحوتة في الصخر، إحدى عجائب الدنيا السبع.',
        itinerary: [
            { day: 'اليوم الأول', title: 'الوصول لعمان', detail: 'الوصول لمطار الملكة علياء والتوجه للفندق في عمان.' },
            { day: 'اليوم الثاني', title: 'الطريق إلى البتراء', detail: 'السفر جنوباً وزيارة السيق والخزنة.' },
            { day: 'اليوم الثالث', title: 'وادي رم', detail: 'رحلة سفاري في وادي رم وتجربة المنسف الأردني.' },
            { day: 'اليوم الثالث', title: 'المغادرة', detail: 'العودة إلى عمان والمغادرة.' }
        ]
    },
    {
        id: 3,
        title: 'فخامة دبي الحديثة',
        location: 'دبي، الإمارات',
        price: '5800 ر.س',
        duration: '5 أيام / 4 ليالي',
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        description: 'استمتع بأفخم التجارب في دبي، من برج خليفة إلى رحلات اليخوت الخاصة.',
        itinerary: [
            { day: 'اليوم الأول', title: 'مرحبا في دبي', detail: 'تسجيل الدخول في فندق 5 نجوم وسط المدينة.' },
            { day: 'اليوم الثاني', title: 'قمة البرج', detail: 'زيارة برج خليفة ودبي مول.' },
            { day: 'اليوم الثالث', title: 'مغامرة الصحراء', detail: 'رحلة سفاري وعشاء بدوي تحت النجوم.' },
            { day: 'اليوم الرابع', title: 'يوم الاسترخاء', detail: 'يوم حر في نخلة جميرا.' },
            { day: 'اليوم الخامس', title: 'المغادرة', detail: 'التوصيل للمطار.' }
        ]
    }
];

// State to hold bookings
let myBookings = JSON.parse(localStorage.getItem('akwadra_bookings')) || [];

// --- DOM Elements ---
const destinationsGrid = document.getElementById('destinations-grid');
const packagesGrid = document.getElementById('packages-grid');
const navbar = document.getElementById('navbar');
const modal = document.getElementById('itinerary-modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');
const bookingsSection = document.getElementById('bookings-section');
const mainContent = document.getElementById('main-content');
const myBookingsBtn = document.getElementById('my-bookings-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const bookingsList = document.getElementById('bookings-list');
const bookingBadge = document.getElementById('booking-badge');
const toast = document.getElementById('toast');

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderPackages();
    updateBookingBadge();

    // Preserve Original Functionality (User requested preservation)
    const originalCard = document.querySelector('.card');
    if (originalCard) {
        originalCard.addEventListener('click', () => {
            console.log('تم النقر على البطاقة!');
            alert('أهلاً بك في عالم البناء بدون كود! (ميزة موروثة)');
        });
    }
});

// --- Functions ---

// 1. Render Destinations
function renderDestinations() {
    destinationsGrid.innerHTML = destinations.map(dest => `
        <div class="group relative rounded-2xl overflow-hidden h-64 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
            <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute bottom-0 p-6 w-full">
                <h3 class="text-2xl font-bold text-white mb-1">${dest.name}</h3>
                <p class="text-slate-300 text-sm flex justify-between items-center">
                    ${dest.count}
                    <span class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <i class="fa-solid fa-arrow-left text-white"></i>
                    </span>
                </p>
            </div>
        </div>
    `).join('');
}

// 2. Render Packages
function renderPackages() {
    packagesGrid.innerHTML = packages.map(pkg => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 package-card transition-all duration-300 flex flex-col">
            <div class="relative h-56 overflow-hidden">
                <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                    <i class="fa-solid fa-star text-yellow-400 ml-1"></i> ${pkg.rating}
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-blue-600 text-sm font-semibold">${pkg.location}</span>
                    <span class="text-slate-400 text-xs"><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">${pkg.title}</h3>
                <p class="text-slate-500 text-sm mb-4 line-clamp-2">${pkg.description}</p>
                <div class="mt-auto flex items-center justify-between">
                    <div>
                        <span class="text-slate-400 text-sm block">تبدأ من</span>
                        <span class="text-xl font-bold text-slate-800">${pkg.price}</span>
                    </div>
                    <button onclick="openItinerary(${pkg.id})" class="bg-slate-100 text-slate-800 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-800 hover:text-white transition-all duration-300">
                        عرض التفاصيل
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 3. Modal Logic
let currentPackageId = null;

window.openItinerary = (id) => {
    const pkg = packages.find(p => p.id === id);
    if (!pkg) return;

    currentPackageId = id;

    // Fill Modal Data
    document.getElementById('modal-title').textContent = pkg.title;
    document.getElementById('modal-img').src = pkg.image;
    document.getElementById('modal-price').textContent = pkg.price;
    document.getElementById('modal-duration').innerHTML = `<i class="fa-regular fa-clock ml-1"></i> ${pkg.duration}`;
    document.getElementById('modal-location').innerHTML = `<i class="fa-solid fa-location-dot ml-1"></i> ${pkg.location}`;

    // Build Timeline
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = pkg.itinerary.map((item, index) => `
        <div class="relative pr-8 timeline-node opacity-0 animate-slide-up" style="animation-delay: ${index * 150}ms">
            <span class="absolute top-0 right-[-30px] font-bold text-slate-300 text-sm">0${index + 1}</span>
            <h5 class="text-lg font-bold text-slate-800">${item.day}: ${item.title}</h5>
            <p class="text-slate-600 mt-1 leading-relaxed">${item.detail}</p>
        </div>
    `).join('');

    // Show Modal
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('modal-active');
    }, 10);
    document.body.style.overflow = 'hidden';
};

function closeItinerary() {
    modal.classList.remove('modal-active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeItinerary);

// Close on backdrop click
modal.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-backdrop')) {
        closeItinerary();
    }
});

// 4. Booking Logic
document.getElementById('confirm-booking-btn').addEventListener('click', () => {
    if (currentPackageId === null) return;
    
    const pkg = packages.find(p => p.id === currentPackageId);
    const newBooking = {
        id: Date.now(),
        packageId: pkg.id,
        title: pkg.title,
        date: new Date().toLocaleDateString('ar-EG'),
        price: pkg.price,
        image: pkg.image,
        status: 'مؤكد'
    };

    myBookings.push(newBooking);
    localStorage.setItem('akwadra_bookings', JSON.stringify(myBookings));
    
    closeItinerary();
    showToast();
    updateBookingBadge();
});

function showToast() {
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

function updateBookingBadge() {
    if (myBookings.length > 0) {
        bookingBadge.textContent = myBookings.length;
        bookingBadge.classList.remove('opacity-0');
    } else {
        bookingBadge.classList.add('opacity-0');
    }
}

// 5. Bookings Management View
function renderBookings() {
    if (myBookings.length === 0) {
        bookingsList.innerHTML = `
            <div class="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fa-regular fa-calendar-xmark text-3xl text-slate-400"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-700">لا توجد حجوزات حالياً</h3>
                <p class="text-slate-500 mt-2">لم تقم بحجز أي رحلة بعد. تصفح الباقات وابدأ مغامرتك!</p>
            </div>
        `;
        return;
    }

    bookingsList.innerHTML = myBookings.map(booking => `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6 animate-slide-up">
            <img src="${booking.image}" class="w-full md:w-32 h-32 rounded-xl object-cover">
            <div class="flex-1 text-center md:text-right">
                <h4 class="text-xl font-bold text-slate-800">${booking.title}</h4>
                <p class="text-slate-500 text-sm mt-1">تاريخ الحجز: ${booking.date}</p>
                <span class="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">${booking.status}</span>
            </div>
            <div class="text-center md:text-left">
                <p class="text-lg font-bold text-blue-600">${booking.price}</p>
                <button onclick="cancelBooking(${booking.id})" class="text-red-500 text-sm hover:underline mt-2">إلغاء الحجز</button>
            </div>
        </div>
    `).join('');
}

window.cancelBooking = (id) => {
    if(confirm('هل أنت متأكد من إلغاء هذا الحجز؟')) {
        myBookings = myBookings.filter(b => b.id !== id);
        localStorage.setItem('akwadra_bookings', JSON.stringify(myBookings));
        renderBookings();
        updateBookingBadge();
    }
};

// 6. Navigation Logic
myBookingsBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    bookingsSection.classList.remove('hidden');
    window.scrollTo(0,0);
    renderBookings();
});

backToHomeBtn.addEventListener('click', () => {
    bookingsSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
    window.scrollTo(0,0);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
