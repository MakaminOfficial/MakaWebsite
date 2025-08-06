import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  ArrowLeft,
  User,
  MapPin,
  Clock,
  Share2,
  Building2,
  Award,
  Handshake,
  Zap,
  Users,
  Trophy,
  Tag,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Link, useParams } from 'wouter';

export default function NewsArticle() {
  const { language } = useLanguageContext();
  const params = useParams();
  const articleId = params.id;
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  // Comprehensive article content data
  const articleData: Record<string, any> = {
    'extraordinary-general-assembly-2025': {
      category: 'corporate',
      categoryIcon: Building2,
      title: 'دعوة لحضور اجتماع الجمعية العمومية غير العادية',
      titleAr: 'دعوة لحضور اجتماع الجمعية العمومية غير العادية',
      date: '2025-08-01',
      author: 'مجلس الإدارة - شركة مكامن السعودية القابضة',
      authorAr: 'مجلس الإدارة - شركة مكامن السعودية القابضة',
      location: 'الرياض - حي السليمانية',
      locationAr: 'الرياض - حي السليمانية',
      readTime: '8 دقائق قراءة',
      readTimeAr: '8 دقائق قراءة',
      tags: ['حوكمة مؤسسية', 'جمعية عمومية', 'مجلس إدارة', 'مساهمين'],
      tagsAr: ['حوكمة مؤسسية', 'جمعية عمومية', 'مجلس إدارة', 'مساهمين'],
      galleryImages: [
        {
          src: '/attached_assets/لقطة الشاشة 2025-07-21 172931_1754473884923.jpg',
          alt: 'مقر اجتماع الشركة بالرياض',
          altAr: 'مقر اجتماع الشركة بالرياض'
        }
      ],
      content: {
        lead: 'يسر مجلس إدارة شركة مكامن السعودية القابضة لخدمات النفط والغاز أن يدعوكم لحضور اجتماع الجمعية العمومية غير العادية، والذي سيعقد – بمشيئة الله – في تمام الساعة 12:00 ظهرًا من يوم السبت الموافق 23/08/2025م في مقر الشركة بالرياض.',
        leadAr: 'يسر مجلس إدارة شركة مكامن السعودية القابضة لخدمات النفط والغاز أن يدعوكم لحضور اجتماع الجمعية العمومية غير العادية، والذي سيعقد – بمشيئة الله – في تمام الساعة 12:00 ظهرًا من يوم السبت الموافق 23/08/2025م في مقر الشركة بالرياض.',
        
        body: [
          {
            title: 'بيانات الشركة الرسمية',
            titleAr: 'بيانات الشركة الرسمية',
            content: 'شركة مكامن السعودية القابضة لخدمات النفط والغاز (شركة مساهمة مقفلة)\nالسجل التجاري رقم: 1010251168\nإلى السادة المساهمين الكرام',
            contentAr: 'شركة مكامن السعودية القابضة لخدمات النفط والغاز (شركة مساهمة مقفلة)\nالسجل التجاري رقم: 1010251168\nإلى السادة المساهمين الكرام'
          },
          {
            title: 'تفاصيل الاجتماع',
            titleAr: 'تفاصيل الاجتماع',
            content: '📍 المكان: مقر اجتماع الشركة بمدينة الرياض – حي السليمانية – مجمع كناري\n📅 التاريخ: السبت الموافق 23/08/2025م\n🕐 الوقت: 12:00 ظهرًا\n📋 الغرض: النظر في جدول الأعمال المرفق',
            contentAr: '📍 المكان: مقر اجتماع الشركة بمدينة الرياض – حي السليمانية – مجمع كناري\n📅 التاريخ: السبت الموافق 23/08/2025م\n🕐 الوقت: 12:00 ظهرًا\n📋 الغرض: النظر في جدول الأعمال المرفق'
          },
          {
            title: 'جدول الأعمال',
            titleAr: 'جدول الأعمال',
            content: '• البند (1): الموافقة على تعديل النظام الأساسي ومواءمته مع نظام الشركات الجديد\n• البند (2): الموافقة على خارطة الطريق الشاملة لإعادة تأسيس الشركة – المقدمة من فريق الإصلاح\n• البند (3): إحاطة وتاريخ العلم – وقائع بيع المقر وتصفية الفروع\n• البند (4): المساءلة النظامية للمجالس السابقة – عرض مخالفات المجلس السابق وقرار لجنة المخالفات\n• البند (5): الموافقة على برنامج تحفيز فريق الإصلاح – لتمويل أعمال الاسترداد القانونية والفنية\n• البند (6): الموافقة على تعيين الدكتور إبراهيم الجلال رئيسًا للجنة المراجعة\n• البند (7): خيار تخصيص نسبة من أسهم المساهمين الراغبين لصالح مجلس الإصلاح – تطوعي واختياري\n• البند (8): يجوز لمجلس الإدارة إضافة أي مستجدات أو بنود جديدة لجدول أعمال الجمعية العامة غير العادية',
            contentAr: '• البند (1): الموافقة على تعديل النظام الأساسي ومواءمته مع نظام الشركات الجديد\n• البند (2): الموافقة على خارطة الطريق الشاملة لإعادة تأسيس الشركة – المقدمة من فريق الإصلاح\n• البند (3): إحاطة وتاريخ العلم – وقائع بيع المقر وتصفية الفروع\n• البند (4): المساءلة النظامية للمجالس السابقة – عرض مخالفات المجلس السابق وقرار لجنة المخالفات\n• البند (5): الموافقة على برنامج تحفيز فريق الإصلاح – لتمويل أعمال الاسترداد القانونية والفنية\n• البند (6): الموافقة على تعيين الدكتور إبراهيم الجلال رئيسًا للجنة المراجعة\n• البند (7): خيار تخصيص نسبة من أسهم المساهمين الراغبين لصالح مجلس الإصلاح – تطوعي واختياري\n• البند (8): يجوز لمجلس الإدارة إضافة أي مستجدات أو بنود جديدة لجدول أعمال الجمعية العامة غير العادية'
          },
          {
            title: 'البند الثالث - إحاطة علمية مهمة',
            titleAr: 'البند الثالث - إحاطة علمية مهمة',
            content: 'يحيط مجلس الإدارة الجمعية العمومية غير العادية علمًا بأنه وفقًا لما ورد في السجلات الرسمية والتقارير السرية، فقد تم في الفترات السابقة (2019–2022م) إبرام تصرفات جوهرية تتعلق ببيع مقر الشركة وتصفية فرع شركة مكامن البترولية وفرع الأوفشور، وما ترتب على ذلك من فقدان معدات وبواخر وسيارات وكوادر فنية وإدارية.',
            contentAr: 'يحيط مجلس الإدارة الجمعية العمومية غير العادية علمًا بأنه وفقًا لما ورد في السجلات الرسمية والتقارير السرية، فقد تم في الفترات السابقة (2019–2022م) إبرام تصرفات جوهرية تتعلق ببيع مقر الشركة وتصفية فرع شركة مكامن البترولية وفرع الأوفشور، وما ترتب على ذلك من فقدان معدات وبواخر وسيارات وكوادر فنية وإدارية.'
          },
          {
            title: 'ملاحظات هامة للحضور',
            titleAr: 'ملاحظات هامة للحضور',
            content: '• سيتم إتاحة وسائل التقنية الحديثة لتمكين المساهمين من المشاركة والتصويت عن بُعد\n• في حال عدم اكتمال النصاب النظامي، سيعقد الاجتماع الثاني بعد ساعة من الموعد المحدد\n• الاجتماع الثاني صحيح إذا حضره مساهمون يمثلون ربع رأس المال على الأقل\n• أي مقترحات ترسل على إيميل الشركة قبل موعد الجمعية العمومية غير العادية',
            contentAr: '• سيتم إتاحة وسائل التقنية الحديثة لتمكين المساهمين من المشاركة والتصويت عن بُعد\n• في حال عدم اكتمال النصاب النظامي، سيعقد الاجتماع الثاني بعد ساعة من الموعد المحدد\n• الاجتماع الثاني صحيح إذا حضره مساهمون يمثلون ربع رأس المال على الأقل\n• أي مقترحات ترسل على إيميل الشركة قبل موعد الجمعية العمومية غير العادية'
          },
          {
            title: 'جدول الأعمال الرسمي للجمعية',
            titleAr: 'جدول الأعمال الرسمي للجمعية',
            content: '1. الموافقة على النظام الأساسي الجديد للشركة\n▫️ مطابق لنظام الشركات 1443هـ\n▫️ يُعزز الحوكمة، الشفافية، ويُكرّس دور المساهم\n\n2. تحديد السيد عادل النوب كممثل مفوض عن الشركة\n▫️ يتمتع بكامل الصلاحيات النظامية لتنفيذ قرارات الجمعية\n\n3. الموافقة على تعيين الدكتور إبراهيم الجلال عضوًا بمجلس الإدارة\n▫️ خبير رقابي وقانوني\n▫️ رئيس لجنة المراجعة – ركيزة أساسية في المجلس الجديد\n\n4. قبول استقالة السيد عثمان الموسى من عضوية المجلس\n▫️ وتوثيقها رسميًا لدى الجهات المختصة\n\n5. معالجة شغور منصب رئيس مجلس الإدارة\n▫️ عبر انتخاب مباشر أو تفويض من الجمعية\n\n6. إقرار المواءمة الكاملة مع نظام الشركات الجديد\n▫️ تشمل تحديث اللوائح وتسجيلها إلكترونيًا بوزارة التجارة',
            contentAr: '1. الموافقة على النظام الأساسي الجديد للشركة\n▫️ مطابق لنظام الشركات 1443هـ\n▫️ يُعزز الحوكمة، الشفافية، ويُكرّس دور المساهم\n\n2. تحديد ممثل مفوض عن الشركة\n▫️ يتمتع بكامل الصلاحيات النظامية لتنفيذ قرارات الجمعية\n\n3. الموافقة على تعيين عضو جديد بمجلس الإدارة\n▫️ خبير رقابي وقانوني\n▫️ رئيس لجنة المراجعة – ركيزة أساسية في المجلس الجديد\n\n4. معالجة التغييرات في عضوية المجلس\n▫️ وتوثيقها رسميًا لدى الجهات المختصة\n\n5. معالجة شغور منصب رئيس مجلس الإدارة\n▫️ عبر انتخاب مباشر أو تفويض من الجمعية\n\n6. إقرار المواءمة الكاملة مع نظام الشركات الجديد\n▫️ تشمل تحديث اللوائح وتسجيلها إلكترونيًا بوزارة التجارة'
          },
          {
            title: 'ملاحظة للمساهمين',
            titleAr: 'ملاحظة للمساهمين',
            content: 'تصويتك في هذه الجمعية سيُعيد تشكيل الشركة من الأساس.\nلا تفوّت هذه اللحظة التاريخية.\n\n🔔 جدول الأعمال النهائي سيُنشر يوم 2 يوليو 2025م عبر المنصة الإلكترونية.\n\n🖋️ نحن نُعيد "مكامن" إلى مسارها السيادي — بصوتك أنت.\nكن في الموعد — كن من صانعي القرار.\n\nللاستفسارات: media@makamin.com.sa',
            contentAr: 'تصويتك في هذه الجمعية سيُعيد تشكيل الشركة من الأساس.\nلا تفوّت هذه اللحظة التاريخية.\n\n🔔 جدول الأعمال النهائي سيُنشر يوم 2 يوليو 2025م عبر المنصة الإلكترونية.\n\n🖋️ نحن نُعيد "مكامن" إلى مسارها السيادي — بصوتك أنت.\nكن في الموعد — كن من صانعي القرار.\n\nللاستفسارات: media@makamin.com.sa'
          }
        ]
      }
    },
    'makamin-general-assembly-ministry-commerce-2025': {
      category: 'governance',
      categoryIcon: Building2,
      title: 'Makamin Saudi Holding Holds General Assembly in the Presence of the Ministry of Commerce',
      titleAr: 'مكامن السعودية القابضة تعقد جمعيتها العمومية بحضور وزارة التجارة',
      date: '2025-02-18',
      author: 'Makamin Media Office',
      authorAr: 'المكتب الإعلامي لمكامن',
      location: 'Riyadh HQ',
      locationAr: 'مقر الرياض',
      readTime: '6 min read',
      readTimeAr: '6 دقائق قراءة',
      tags: ['Company News', 'Governance', 'Legal', 'Ministry of Commerce'],
      tagsAr: ['أخبار الشركة', 'الحوكمة', 'قانوني', 'وزارة التجارة'],
      galleryImages: [
        {
          src: '/attached_assets/10cd286c-eee6-4dd9-a542-6e5db6742fcc_1752785954593.JPG',
          alt: 'General Assembly boardroom session with shareholders and Ministry representatives',
          altAr: 'جلسة الجمعية العمومية بحضور المساهمين وممثلي الوزارة'
        },
        {
          src: '/attached_assets/b5f98830-bca6-492c-8802-7a5058484347(1)_1752785954594.JPG',
          alt: 'Board member presenting agenda items during voting process',
          altAr: 'عضو مجلس الإدارة يعرض بنود جدول الأعمال أثناء عملية التصويت'
        },
        {
          src: '/attached_assets/IMG_0420_1752785954601.PNG',
          alt: 'CEO ALNOOB reviewing legal documents during assembly proceedings',
          altAr: 'الرئيس التنفيذي النوب يراجع الوثائق القانونية أثناء أعمال الجمعية'
        },
        {
          src: '/attached_assets/IMG_0430_1752785954601.PNG',
          alt: 'Shareholders in waiting area before General Assembly commencement',
          altAr: 'المساهمون في منطقة الانتظار قبل بدء الجمعية العمومية'
        },
        {
          src: '/attached_assets/IMG_0423_1752787074922.jpg',
          alt: 'Board Chairman casting decisive vote under Ministry supervision',
          altAr: 'رئيس مجلس الإدارة يدلي بصوته الحاسم تحت إشراف الوزارة'
        },
        {
          src: '/attached_assets/IMG_0427_1752787074922.jpg',
          alt: 'Ministry of Commerce representative observing electoral transparency',
          altAr: 'ممثل وزارة التجارة يراقب شفافية العملية الانتخابية'
        },
        {
          src: '/attached_assets/IMG_0444_1752787074923.jpg',
          alt: 'New Board members in consultative session post-election',
          altAr: 'أعضاء مجلس الإدارة الجدد في جلسة تشاورية ما بعد الانتخاب'
        }
      ],
      content: {
        lead: 'RIYADH, Saudi Arabia – In a landmark legal and administrative event, Makamin Saudi Holding for Oil & Gas Services (Closed Joint Stock Company) convened its Ordinary General Assembly on Tuesday, February 18, 2025, pursuant to a final and enforceable judgment issued by the Riyadh Commercial Court under Case No. 4630484436.',
        leadAr: 'الرياض، المملكة العربية السعودية – في حدث قانوني وإداري مفصلي، عقدت شركة مكامن السعودية القابضة لخدمات النفط والغاز (شركة مساهمة مقفلة) جمعيتها العمومية العادية يوم الثلاثاء 18 فبراير 2025، بموجب حكم قضائي نهائي واجب التنفيذ صادر عن المحكمة التجارية بالرياض تحت رقم القضية 4630484436.',
        
        body: [
          {
            title: 'Ministry of Commerce Supervision',
            titleAr: 'إشراف وزارة التجارة',
            content: 'The assembly was held at Canary Complex, Al-Sulaimaniah District, Riyadh, with the attendance of major shareholders and official representatives from the Ministry of Commerce, namely Mr. Moayyad Abanmi and Mr. Mohammed Al-Quraysha. This meeting marks the first legally convened shareholders\' assembly since 2019, following the previous board\'s failure to fulfill its statutory obligations.',
            contentAr: 'عُقدت الجمعية في مجمع كناري، حي السليمانية، الرياض، بحضور كبار المساهمين والممثلين الرسميين من وزارة التجارة، وهما الأستاذ مؤيد العبنمي والأستاذ محمد القريشا. تمثل هذه الجمعية أول اجتماع مساهمين منعقد قانونياً منذ عام 2019، عقب فشل مجلس الإدارة السابق في الوفاء بالتزاماته القانونية.'
          },
          {
            title: 'Board of Directors Election',
            titleAr: 'انتخاب مجلس الإدارة',
            content: 'During the session, the court ruling was reviewed and the legal quorum confirmed. The assembly proceeded with its agenda, notably the election of a new seven-member Board of Directors, through a secret ballot process overseen with full transparency and regulatory compliance. The new Board immediately held its inaugural meeting to assign executive positions.',
            contentAr: 'خلال الجلسة، تمت مراجعة الحكم القضائي وتأكيد النصاب القانوني. واصلت الجمعية جدول أعمالها، وتحديداً انتخاب مجلس إدارة جديد من سبعة أعضاء، من خلال عملية اقتراع سري تمت بشفافية كاملة وامتثال تنظيمي. عقد مجلس الإدارة الجديد فوراً اجتماعه الافتتاحي لتوزيع المناصب التنفيذية.'
          },
          {
            title: 'New Leadership Structure',
            titleAr: 'الهيكل القيادي الجديد',
            content: 'The newly elected Board of Directors comprises: Eng. Othman Fadhel Al-Mousa (Chairman), Eng. Ibrahim Ahmed Al-Ghamdi (Vice Chairman), Mr. Adel Ayedh Al-Noob (Chief Executive Officer), Dr. Ibrahim Abdullah Al-Jallal (Chairman of the Executive Committee), along with Eng. Khaled Hamdan Al-Saif, Eng. Hamad Ali Al-Qahtani, and Eng. Mohammed Jassem Al-Fawaz.',
            contentAr: 'يضم مجلس الإدارة المنتخب حديثاً: م. عثمان فاضل الموسى (رئيس مجلس الإدارة)، م. إبراهيم أحمد الغامدي (نائب رئيس مجلس الإدارة)، الأستاذ عادل عايض النوب (الرئيس التنفيذي)، د. إبراهيم عبدالله الجلال (رئيس اللجنة التنفيذية)، إلى جانب م. خالد حمدان السيف، م. حمد علي القحطاني، م. محمد جاسم الفواز.',
            ceoPhoto: '/attached_assets/ADEL AYED ALNOOB_1752885031070.jpg'
          },
          {
            title: 'Legal and Operational Restoration',
            titleAr: 'الاستعادة القانونية والتشغيلية',
            content: 'This general assembly marks a pivotal moment in the company\'s legal and operational restoration. It lays the foundation for a comprehensive administrative and financial reform plan to be led by the newly elected Board, in alignment with the new Companies Law and its executive regulations issued by the Ministry of Commerce.',
            contentAr: 'تمثل هذه الجمعية العمومية لحظة مفصلية في الاستعادة القانونية والتشغيلية للشركة. وتضع الأساس لخطة إصلاح إداري ومالي شامل ستقودها مجلس الإدارة المنتخب حديثاً، بما يتماشى مع نظام الشركات الجديد ولوائحه التنفيذية الصادرة عن وزارة التجارة.'
          }
        ]
      }
    },
    'makamin-offshore-expansion-2024': {
      category: 'expansion',
      categoryIcon: Building2,
      title: 'Makamin Launches Next-Gen Offshore Fleet to Meet Regional Energy Surge',
      titleAr: 'مكامن تطلق أسطولاً بحرياً متطوراً لمواكبة الطفرة الطاقوية الإقليمية',
      date: '2024-12-15',
      author: 'Makamin Media Office',
      authorAr: 'المكتب الإعلامي لمكامن',
      location: 'Riyadh HQ',
      locationAr: 'مقر الرياض',
      readTime: '4 min read',
      readTimeAr: '4 دقائق قراءة',
      tags: ['Marine Operations', 'Fleet Expansion', 'Aramco Partnership', 'Regional Leadership'],
      tagsAr: ['العمليات البحرية', 'توسع الأسطول', 'شراكة أرامكو', 'الريادة الإقليمية'],
      content: {
        lead: 'RIYADH, Saudi Arabia – Saudi Makamin Holding Company today announced a landmark expansion of its offshore marine capabilities with the deployment of eight advanced offshore support vessels, positioning the company as the undisputed leader in regional energy marine services.',
        leadAr: 'الرياض، المملكة العربية السعودية – أعلنت شركة مكامن السعودية القابضة اليوم عن توسع نوعي في قدراتها البحرية مع نشر ثماني سفن دعم بحرية متطورة، مموضعة الشركة كالرائد الذي لا منازع له في خدمات الطاقة البحرية الإقليمية.',
        
        body: [
          {
            title: 'Strategic Fleet Enhancement',
            titleAr: 'تعزيز الأسطول الاستراتيجي',
            content: 'The new vessel deployment represents a SAR 450 million investment in cutting-edge marine technology, featuring dynamic positioning systems, advanced navigation equipment, and enhanced safety protocols that exceed international offshore standards. Each vessel is equipped with state-of-the-art accommodation facilities for 120 personnel and specialized equipment handling capabilities.',
            contentAr: 'يمثل نشر الأسطول الجديد استثماراً بقيمة 450 مليون ريال سعودي في التكنولوجيا البحرية المتطورة، ويضم أنظمة التموضع الديناميكي ومعدات الملاحة المتقدمة وبروتوكولات السلامة المحسنة التي تتجاوز المعايير البحرية الدولية. كل سفينة مجهزة بمرافق إقامة حديثة لـ120 شخص وقدرات متخصصة للتعامل مع المعدات.'
          },
          {
            title: 'Aramco Partnership Strengthened',
            titleAr: 'تعزيز الشراكة مع أرامكو',
            content: 'This expansion directly supports Saudi Aramco\'s offshore development projects across the Arabian Gulf, with Makamin Offshore Saudi Ltd. (MOS) securing multi-year contracts worth over $200 million. The partnership underscores Makamin\'s position as a Tier-1 contractor and preferred marine services provider.',
            contentAr: 'يدعم هذا التوسع مباشرة مشاريع التطوير البحرية لأرامكو السعودية عبر الخليج العربي، حيث حصلت مكامن أوفشور السعودية المحدودة على عقود متعددة السنوات بقيمة تزيد عن 200 مليون دولار. تؤكد الشراكة موقع مكامن كمقاول من الدرجة الأولى ومزود الخدمات البحرية المفضل.'
          },
          {
            title: 'Regional Market Leadership',
            titleAr: 'ريادة السوق الإقليمية',
            content: 'With operations extending from Saudi Arabia to Bahrain and UAE, Makamin\'s expanded fleet positions the company to capture growing demand from regional energy giants. The vessels will support offshore drilling, platform maintenance, subsea operations, and emergency response activities across Gulf waters.',
            contentAr: 'مع العمليات الممتدة من المملكة العربية السعودية إلى البحرين والإمارات، يموضع الأسطول الموسع لمكامن الشركة للاستفادة من الطلب المتزايد من عمالقة الطاقة الإقليمية. ستدعم السفن عمليات الحفر البحرية وصيانة المنصات والعمليات تحت البحر وأنشطة الاستجابة للطوارئ عبر مياه الخليج.'
          }
        ]
      }
    },
    'aramco-tier1-contractor-2024': {
      category: 'recognition',
      categoryIcon: Award,
      title: 'Makamin Achieves Aramco Tier-1 Contractor Status with Zero LTA Record',
      titleAr: 'مكامن تحقق مرتبة المقاول من الدرجة الأولى مع أرامكو بسجل صفر حوادث',
      date: '2024-12-08',
      author: 'HSE Department',
      authorAr: 'إدارة الصحة والسلامة والبيئة',
      location: 'Riyadh HQ',
      locationAr: 'مقر الرياض',
      readTime: '3 min read',
      readTimeAr: '3 دقائق قراءة',
      tags: ['Safety Excellence', 'Aramco Recognition', 'Tier-1 Status', 'Zero LTA'],
      tagsAr: ['التميز في السلامة', 'اعتراف أرامكو', 'مرتبة الدرجة الأولى', 'صفر حوادث'],
      content: {
        lead: 'RIYADH, Saudi Arabia – Saudi Aramco has officially elevated Makamin to Tier-1 contractor status following an unprecedented 1,980 consecutive days without Lost Time Accidents (LTA), setting a new benchmark for safety excellence in the regional oil and gas sector.',
        leadAr: 'الرياض، المملكة العربية السعودية – رفعت أرامكو السعودية رسمياً مكامن إلى مرتبة المقاول من الدرجة الأولى بعد رقم قياسي غير مسبوق من 1,980 يوماً متتالياً بدون حوادث فقدان وقت العمل، مما يضع معياراً جديداً للتميز في السلامة في قطاع النفط والغاز الإقليمي.',
        
        body: [
          {
            title: 'Safety Performance Excellence',
            titleAr: 'تميز الأداء في السلامة',
            content: 'Makamin\'s safety achievement represents more than 5.4 years of continuous operations without workplace incidents across drilling, marine, and inspection services. This record surpasses industry standards and demonstrates the company\'s unwavering commitment to protecting its workforce of over 800 employees and contractors.',
            contentAr: 'إنجاز مكامن في السلامة يمثل أكثر من 5.4 سنوات من العمليات المستمرة دون حوادث في أماكن العمل عبر خدمات الحفر والبحرية والتفتيش. هذا الرقم القياسي يتجاوز المعايير الصناعية ويظهر التزام الشركة الثابت بحماية قوة عملها المكونة من أكثر من 800 موظف ومقاول.'
          }
        ]
      }
    }
  };

  const article = articleData[articleId || ''];
  
  if (!article) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/news">
            <Button>Back to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categories = [
    { id: 'governance', name: 'Governance', nameAr: 'الحوكمة', icon: Building2, color: 'bg-emerald-600' },
    { id: 'expansion', name: 'Expansion', nameAr: 'التوسع', icon: Building2, color: 'bg-blue-500' },
    { id: 'recognition', name: 'Recognition', nameAr: 'الاعتراف', icon: Award, color: 'bg-yellow-500' },
    { id: 'partnership', name: 'Partnership', nameAr: 'الشراكة', icon: Handshake, color: 'bg-green-500' },
    { id: 'technology', name: 'Technology', nameAr: 'التكنولوجيا', icon: Zap, color: 'bg-purple-500' },
    { id: 'leadership', name: 'Leadership', nameAr: 'القيادة', icon: Users, color: 'bg-indigo-500' },
    { id: 'quality', name: 'Quality', nameAr: 'الجودة', icon: Trophy, color: 'bg-orange-500' }
  ];

  const category = categories.find(c => c.id === article.category);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'ar') {
      return date.toLocaleDateString('ar-SA', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Article Header */}
      <section className="py-16 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/news">
              <Button variant="ghost" className="text-slate-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'العودة إلى الأخبار' : 'Back to News'}
              </Button>
            </Link>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              {articleId === 'makamin-general-assembly-ministry-commerce-2025' && (
                <div className="flex items-center gap-2">
                  <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 animate-pulse border-2 border-yellow-400">
                    📌 {language === 'ar' ? 'مميز' : 'FEATURED'}
                  </Badge>
                  <Badge className="bg-emerald-700 text-white px-3 py-1">
                    {language === 'ar' ? 'إشراف قانوني' : 'Legal Oversight'}
                  </Badge>
                </div>
              )}
              <Badge className={`${category?.color} text-white px-3 py-1`}>
                {category && <category.icon className="w-4 h-4 mr-2" />}
                {language === 'ar' ? category?.nameAr : category?.name}
              </Badge>
              <span className="text-slate-400 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {language === 'ar' ? article.readTimeAr : article.readTime}
              </span>
            </div>

            <div className="relative">
              {articleId === 'makamin-general-assembly-ministry-commerce-2025' && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-emerald-400/30">
                    <img 
                      src="/attached_assets/Logo_Ministry_of_Commerce.svg_1752787097521.png" 
                      alt="Supervised by Ministry of Commerce" 
                      className="w-20 h-20 object-contain"
                    />
                    <div className="text-center mt-2 text-xs text-emerald-300">
                      {language === 'ar' ? 'بإشراف وزارة التجارة' : 'Ministry Supervised'}
                    </div>
                  </div>
                </div>
              )}
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight pr-28">
                {language === 'ar' ? article.titleAr : article.title}
              </h1>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {language === 'ar' ? article.authorAr : article.author}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {language === 'ar' ? article.locationAr : article.location}
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <Share2 className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'مشاركة' : 'Share'}
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {(language === 'ar' ? article.tagsAr : article.tags).map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-8 lg:p-12">
                {/* Lead Paragraph */}
                <p className="text-xl text-slate-300 leading-relaxed mb-12 font-medium border-l-4 border-[#c5a66e] pl-6">
                  {language === 'ar' ? article.content.leadAr : article.content.lead}
                </p>

                {/* Article Body */}
                <div className="space-y-12">
                  {article.content.body.map((section: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-6">
                        {language === 'ar' ? section.titleAr : section.title}
                      </h2>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {language === 'ar' ? section.contentAr : section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Photo Gallery */}
                {article.galleryImages && (
                  <div className="mt-12 pt-8 border-t border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <Building2 className="w-6 h-6 text-emerald-500" />
                      {language === 'ar' ? 'معرض صور الجمعية العمومية' : 'General Assembly Photo Gallery'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {article.galleryImages.map((imgData: any, index: number) => (
                        <motion.div 
                          key={index} 
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => {
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        >
                          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-slate-600 group-hover:border-emerald-400 transition-colors">
                            <img 
                              src={imgData.src || imgData}
                              alt={language === 'ar' ? imgData.altAr || `صورة الحدث ${index + 1}` : imgData.alt || `Event photo ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white text-sm font-medium line-clamp-2">
                                  {language === 'ar' ? imgData.altAr || `صورة الحدث ${index + 1}` : imgData.alt || `Event photo ${index + 1}`}
                                </p>
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lightbox Modal */}
                {lightboxOpen && article.galleryImages && (
                  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-5xl w-full">
                      <button 
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      
                      <div className="relative">
                        <img 
                          src={article.galleryImages[lightboxIndex]?.src || article.galleryImages[lightboxIndex]}
                          alt={language === 'ar' ? 
                            article.galleryImages[lightboxIndex]?.altAr || `صورة الحدث ${lightboxIndex + 1}` :
                            article.galleryImages[lightboxIndex]?.alt || `Event photo ${lightboxIndex + 1}`
                          }
                          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />
                        
                        {article.galleryImages.length > 1 && (
                          <>
                            <button 
                              onClick={() => setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : article.galleryImages.length - 1)}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-3 text-white hover:bg-black/70 transition-colors"
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button 
                              onClick={() => setLightboxIndex(lightboxIndex < article.galleryImages.length - 1 ? lightboxIndex + 1 : 0)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-3 text-white hover:bg-black/70 transition-colors"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </button>
                          </>
                        )}
                      </div>
                      
                      <div className="mt-4 text-center">
                        <p className="text-white text-lg font-medium mb-2">
                          {language === 'ar' ? 
                            article.galleryImages[lightboxIndex]?.altAr || `صورة الحدث ${lightboxIndex + 1}` :
                            article.galleryImages[lightboxIndex]?.alt || `Event photo ${lightboxIndex + 1}`
                          }
                        </p>
                        <p className="text-slate-400 text-sm">
                          {lightboxIndex + 1} {language === 'ar' ? 'من' : 'of'} {article.galleryImages.length}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-400">
                      {language === 'ar' ? 
                        `نُشر في ${formatDate(article.date)} بواسطة ${article.authorAr}` :
                        `Published on ${formatDate(article.date)} by ${article.author}`
                      }
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                        <Share2 className="w-4 h-4 mr-2" />
                        {language === 'ar' ? 'مشاركة المقال' : 'Share Article'}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-8">
            {language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
          </h2>
          <div className="text-center py-8">
            <Link href="/news">
              <Button className="bg-[#c5a66e] hover:bg-[#b8956b] text-white">
                {language === 'ar' ? 'عرض جميع الأخبار' : 'View All News'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}