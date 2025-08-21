import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ShowJson from "./ShowJson.json";
import "./Show.css";

const SPEED = 150; // سرعة التحريك بالبكسل/ثانية

export default function Show() {
  const controls = useAnimation();
  const trackRef = useRef(null);
  const [itemCount, setItemCount] = useState(2); // افتراضي للموبايل

  // حساب العناصر الظاهرة حسب العرض
  const updateItemCount = () => {
    const w = window.innerWidth;
    if (w >= 1024) setItemCount(6);
    else if (w >= 768) setItemCount(4);
    else setItemCount(2);
  };

  // بدء/إعادة تشغيل الأنيميشن بحساب المسافة والمدة من scrollWidth
  const startLoop = () => {
    const el = trackRef.current;
    if (!el) return;
    const distance = el.scrollWidth / 2; // لأننا مكررين العناصر مرتين
    const duration = distance / SPEED;

    controls.start({
      x: -distance,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    updateItemCount();
    window.addEventListener("resize", updateItemCount);
    return () => window.removeEventListener("resize", updateItemCount);
  }, []);

  // كل ما تغيّر itemCount (يعني تغيّر عرض العناصر) نعيد حساب المسافة ونشغل
  useEffect(() => {
    // تأخير بسيط للسماح للمتصفح يحسب الأحجام بعد تغيير البريكبوينت
    const id = setTimeout(startLoop, 50);
    return () => clearTimeout(id);
  }, [itemCount, controls]);

  // دبل آريه لعمل لوب سلس
  const data = [...ShowJson, ...ShowJson];

  return (
    <div
      className="w-full overflow-hidden">
      <motion.div ref={trackRef} className="flex" animate={controls}>
        {data.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            // لا تستخدم gap على الكونتينر، خلي المسافة داخل العنصر نفسه
            className="flex-shrink-0 basis-1/2 md:basis-1/4 lg:basis-1/6 p-2"
          >
            <div
              className="show-item h-64 shadow bg-center bg-cover"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
