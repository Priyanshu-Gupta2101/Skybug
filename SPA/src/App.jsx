import Header from "./components/Header";
import Footer from "./components/Footer";
import SignupBox from "./components/SignupBox";
import RelatedBox from "./components/RelatedBox";
import PageHeader from "./components/PageHeader";
import Module from "./components/Module";
import { data } from "./data/data";
import ModuleBox from "./components/ModuleBox";

function App() {
  return (
    <>
      <Header />
      <PageHeader />
      {Object.keys(data).map((key) => {
        const moduleData = data[key];
        return (
          <Module
            key={key}
            name={moduleData.name}
            highlight={moduleData.highlight}
            highlightText={moduleData.highlightText}
            icon={moduleData.icon}
            boldText={moduleData.boldText}
            text={moduleData.text}
            what_you_get={moduleData.what_you_get}
            rating={moduleData.rating}
            remark={moduleData.remark}
            remark_icon={moduleData.remark_icon}
            number={key}
          />
        );
      })}
      <ModuleBox />
      <div className="mt-5 mx-[1rem] lg:mx-[11rem] pl-5">
        <div className="container py-10 xl:lg:py-16">
          <h2 className="text-2xl md:text-3xl mb-4 text-gray-800">
            Related deals you might like
          </h2>
          <div className="flex overflow-x-auto whitespace-nowrap lg:grid lg:grid-cols-3 gap-4 scrollbar-none">
            <RelatedBox />
            <RelatedBox />
            <RelatedBox />
          </div>
        </div>
      </div>
      <SignupBox />
      <Footer />
    </>
  );
}

export default App;
