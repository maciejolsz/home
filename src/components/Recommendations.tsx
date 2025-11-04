import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

export interface RecommendationItem {
  name: string;
  position: string;
  company: string;
  text: string;
}

const Recommendations: React.FC<{ recommendations: RecommendationItem[] }> = ({ recommendations }) => {
  return (
    <section className="max-w-3xl mx-auto mt-12 animate-fade-in">
      <h3 className="text-2xl text-brown-900 font-semibold mb-4">Recommendations</h3>

      <div className="space-y-4">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="group px-4 py-4 hover:bg-paper/70 rounded-lg transition-all duration-200">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-paper rounded-lg shadow-sm flex items-center justify-center">
                  <UserIcon className="h-8 w-8 text-gray-500" />
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-brown-900 text-lg">{recommendation.name}</h4>
                <p className="text-gray-700 text-sm">
                  {recommendation.position} · {recommendation.company}
                </p>
                <p className="mt-4 text-gray-700 italic">"{recommendation.text}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;

