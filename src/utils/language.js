


const french = {
    first : {
        title : "Nous connaître",
        link : '#',
        subtitles : ['Mot de la présidente', 'Qui Sommes nous' , 'Notre équipe' , 'Notre Objectif' , 'Nous Contacter'],
        links : ['/mot-de-la-presidente','#','#','#','#']
    },
    second : {
        title : "Axes d’intervention",
        link : '#',
        subtitles : ['Education', 'Santé' , 'INCLUSION' , 'CULTURE' , 'ENVIRONMENT'],
        links : ['#','#','#','#','#']
    },
    third : {
        title : "Programmes",
        link : '#',
        subtitles : ['INNOVATION SOCIALE', 'entreprenariat d\'ecosystem', 'economie sociale et solidaire', 'appel d\'offre'],
        links : ['#','#','#','#']
    },
    fourth : {
        title : "Publications",
        link : '#',
        subtitles : ['Actualités', 'nos projet', 'evenement','forum', 'blog'],
        links : ['#','#','#','#', '#']
    },
    fifth : {
        title : "se connecter",
        link : '#'
    },
    link : 'logo.png'
}


const arabic = {
    first : {
        title : "للتعرّف علينا",
        link : '#',
        subtitles : ['كلمة الرئيسة', 'من نحن' , 'فريقنا' , 'هدفنا' , 'اتصل بنا'],
        links : ['#','#','#','#','#']
    },
    second : {
        title : "مجالات التدخل",
        link : '#',
        subtitles : ['التعليم', 'صحة' , 'تضمين' , 'ثقافة' , 'بيئة'],
        links : ['#','#','#','#','#']
    },
    third : {
        title : "برامجنا",
        link : '#',
        subtitles : ['ابتكار اجتماعي', 'ريادة الأعمال في النظام البيئي', 'الاقتصاد الاجتماعي والتضامني', 'مناقصة'],
        links : ['#','#','#','#']
    },
    fourth : {
        title : "اصدارات",
        link : '#',
        subtitles : ['أخبار', 'مشاريعنا', 'حدث','المنتدى', 'المدونة'],
        links : ['#','#','#','#','#']
    },
    fifth : {
        title : "تسجيل الدخول",
        link : '#',
    },
    link : 'logo2.jpg'
}


const frenchAuth = {
    first : {
        title : 'Actualités',
        link : '#'
    },
    second : {
        title : 'Evenement',
        link : '#'
    },
    third : {
        title : 'Calendrier',
        link : '#'
    },
    fourth : {
        title : 'Agenda',
        link : '#'
    },
    sixth : {
        title : 'Plannings',
        link : '#'
    },
    seventh : {
        title : 'Offre_d\'appel',
        link : '#'
    },
    eighth : {
        title : 'Forum',
        link : '#'
    },
    ninth : {
        title : 'se_deconnecter',
        link : '#'
    }
}

const arabicAuth = {
    first : {
        title : 'أخبار',
        link : '#'
    },
    second : {
        title : 'حدث',
        link : '#'
    },
    third : {
        title : 'جدول المواعيد',
        link : '#'
    },
    fourth : {
        title : 'جدول أعمال',
        link : '#'
    },
    sixth : {
        title : 'جداول',
        link : '#'
    },
    seventh : {
        title : 'عرض الاتصال',
        link : '#'
    },
    eighth : {
        title : 'المنتدى',
        link : '#'
    },
    ninth : {
        title : 'تسجيل الخروج',
        link : '#'
    }
}


export const getMenuArabic = () => {
    return  arabic;
}

export const getMenuFrench = () => {
    return  french;
}

export const getAuthMenuFrench =() => {
    return frenchAuth;
}

export const getAuthMenuArabic =() => {
    return arabicAuth;
}