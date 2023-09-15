import React from "react";
import Card from "./Card";
import gpt from "../assets/gpt.jpg";
import coding from "../assets/coding.jpg";
import summary from "../assets/summary.jpg";
import image from "../assets/image.jpg";
import question from "../assets/question.jpg";


const Portfolio = () => {
  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Service
                </span>
                <h2 className="mb-4 text-3xl font-bold font-mono text-dark sm:text-4xl md:text-[40px]">
                  Our Recent developments
                </h2>
                <p className="text-base font-semibold text-body-color">
                  There are many variations of GPTs available in the market. We
                  have developed some of the best GPTs to help you in your
                  daily life.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            
              <Card

                CardTitle="Coding GPT"
                CardDescription=" GPT-3 API: Smart tool for text, chatbots, translations, and more."
                image={coding}
                link={'/codingGpt'}
              />
            
            
              <Card

                CardTitle="Summary GPT"
                CardDescription="Simplify your reading with Summize, an open-source article summarizer
                that transforms lengthy articles into clear and concise summaries."
                image={summary}
                link={'/summaryAI'}
              />
            
            
              <Card

                CardTitle="Image GPT"
                CardDescription=" GPT-3 API: Smart tool for text, chatbots, translations, and more."
                image={image}
                link={'/imageGpt'}
              />
           
           
              <Card

                CardTitle="Question GPT"
                CardDescription="GPT-3 API: Smart tool for text, chatbots, translations, and more."
                image={question}
                link={'/questionGpt'}
              />
            
              <Card

                CardTitle="Under Development"
                CardDescription="Believe Us we are working on it."
                image={gpt}
                link={'/'}
              />
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;


