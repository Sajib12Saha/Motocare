import { cn } from "@/lib/utils"
import { FaCar } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";

const achievements = [
    { number: "2,058", label: "Project", Icon:<IoIosClock/> },
    { number: "67", label: "Years of Experience" ,Icon:<FaCar/> },
    { number: "2,076", label: "Happy People So Far",Icon:<FaPeopleGroup/>},
  ]
  
  export const  Achievements = () => {
    return (
      <section className="bg-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Achievement</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={cn(
                "p-8 rounded-lg text-center",
                index === 1 ? "bg-primary" :"bg-secondary"
                )}>
                <div className="text-4xl font-bold flex flex-col items-center justify-center gap-y-2 m">
                  {achievement.Icon}
                  <p className="text-2xl font-semibold">{achievement.number}</p>
                  <p className="text-neutral-400 text-sm">{achievement.label}</p>
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  