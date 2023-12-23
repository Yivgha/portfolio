import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skillsSection" id="mySkills">
          <div className="portfolioContainer">
              <p className="sectionTitle">My Skills</p>
              <h2 className="skillsSectionHeading">My Expertise</h2>
          </div>
          <div className="skillsSectionContainer">
              {data?.skills?.map((item, index) => (
                  <div key={index} className="skillsSectionCard">
                      <div className="skillsSectionImg">
                          <img src={item.src} alt={item.title} />
                      </div>
                      <div className="skillsSectionCardContent">
                          <h3 className="skillsSectionTitle">{item.title}</h3>
                          <p className="skillsSectionDescription">{item.description}</p>
                      </div>
                </div>
              ))}
          </div>
    </section>
  );
}