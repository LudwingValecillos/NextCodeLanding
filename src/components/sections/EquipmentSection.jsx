import React from "react";
import {
  CodeBracketIcon,
  ServerIcon,
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

const EquipmentSection = () => {
  const equipment = [
    {
      icon: CodeBracketIcon,
      name: "Desarrollo Frontend",
      description: "React & Next.js",
      delay: 0,
      color: "from-blue-400 to-blue-600",
      iconColor: "text-blue-500",
    },
    {
      icon: ServerIcon,
      name: "Backend",
      description: "Node.js & APIs",
      delay: 100,
      color: "from-purple-400 to-purple-600",
      iconColor: "text-purple-500",
    },
    {
      icon: CloudArrowUpIcon,
      name: "Cloud Services",
      description: "AWS & Azure",
      delay: 200,
      color: "from-green-400 to-green-600",
      iconColor: "text-green-500",
    },
    {
      icon: DevicePhoneMobileIcon,
      name: "Diseño Responsivo",
      description: "Mobile First",
      delay: 300,
      color: "from-red-400 to-red-600",
      iconColor: "text-red-500",
    },
    {
      icon: GlobeAltIcon,
      name: "SEO",
      description: "Optimización",
      delay: 400,
      color: "from-yellow-400 to-yellow-600",
      iconColor: "text-yellow-600",
    },
    {
      icon: ShieldCheckIcon,
      name: "Seguridad",
      description: "SSL & HTTPS",
      delay: 500,
      color: "from-orange-400 to-orange-600",
      iconColor: "text-orange-500",
    },
    {
      icon: RocketLaunchIcon,
      name: "Performance",
      description: "Optimización",
      delay: 600,
      color: "from-pink-400 to-pink-600",
      iconColor: "text-pink-500",
    },
    {
      icon: CursorArrowRaysIcon,
      name: "UI/UX",
      description: "Diseño Moderno",
      delay: 700,
      color: "from-indigo-400 to-indigo-600",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-[#ECF0F1] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2980B9]/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-light text-[#2980B9] mb-4">
            Tecnologías y Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Utilizamos las últimas tecnologías para crear sitios web modernos y
            eficientes
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group "
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                data-aos-duration="800"
              >
                <div
                  className="bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 
                  transition-all duration-500 hover:shadow-2xl text-center relative overflow-hidden cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 "
                    style={{
                      background: `linear-gradient(135deg, ${
                        item.color.split(" ")[1]
                      }, ${item.color.split(" ")[3]})`,
                    }}
                  ></div>
                  <div className="relative ">
                    <div className="relative w-16 h-16 mx-auto mb-4 ">
                      <div
                        className="absolute inset-0 bg-gradient-to-br rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 "
                        style={{
                          background: `linear-gradient(135deg, ${
                            item.color.split(" ")[1]
                          }, ${item.color.split(" ")[3]})`,
                        }}
                      ></div>
                      <Icon
                        className={`w-12 h-12 mx-auto ${item.iconColor} transform group-hover:scale-110 
                        transition-all duration-500 group-hover:${item.iconColor}`}
                      />
                    </div>
                    <h3
                      className={`${item.iconColor} font-medium transition-colors duration-500 lg:text-lg group-hover:${item.iconColor}`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 transition-colors duration-500 group-hover:text-gray-800">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to right, ${
                        item.color.split(" ")[1]
                      }, ${item.color.split(" ")[3]})`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"
        data-aos="fade-down"
        data-aos-duration="1500"
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"
        data-aos="fade-up"
        data-aos-duration="1500"
      ></div>
    </section>
  );
};

export default EquipmentSection;
