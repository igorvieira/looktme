import React, { useState } from "react";

interface GroupLinks {
  url: string;
  title: string;
}

interface SectionData {
  url: string;
  title: string;
}

const App: React.FC = () => {
  const [groupLinks, setGroupLinks] = useState<GroupLinks[]>([]);
  const [sectionData, setSectionData] = useState<SectionData[]>([
    { url: "", title: "" },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { name, value } = e.target;
    setSectionData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [name]: value };
      return newData;
    });
  };

  const handleCreate = (sectionIndex: number) => {
    setGroupLinks((prevLinks) => [...prevLinks, sectionData[sectionIndex]]);
  };

  const handleCreateSection = () => {
    setSectionData((prevData) => [...prevData, { url: "", title: "" }]);
  };

  return (
    <main className="flex flex-col md:flex-row justify-between p-4 md:p-14">
      <section className="w-full md:w-1/2 mb-4 md:mb-0">
        <button
          onClick={handleCreateSection}
          className="border border-slate-950 p-2 rounded-lg tracking-wider text-xs uppercase mt-5 mb-5 w-full whitespace-nowrap"
        >
          Add Links
        </button>

        {sectionData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col border border-slate-950 rounded-lg mt-4 mb-4 tracking-wider p-4 items-start"
          >
            <label className="md:w-3/4 mb-2 md:mb-0 md:mr-2">
              URL:
              <input
                type="text"
                className="border-b border-slate-950 outline-none mx-2 w-full md:w-3/4"
                name="url"
                value={data.url}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <br />
            <label className="md:w-3/4 mb-2 md:mb-0 md:mr-2">
              Title:
              <input
                className="border-b border-slate-950 outline-none mx-2 w-full md:w-3/4"
                type="text"
                name="title"
                value={data.social}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <br />
            <button
              className="w-full border border-slate-950 p-2 rounded-lg tracking-wider text-xs uppercase mt-2 md:mt-0 whitespace-nowrap"
              onClick={() => handleCreate(index)}
            >
              Add Link
            </button>
          </div>
        ))}
      </section>
      <section className="w-full md:w-1/2 flex flex-col items-center">
        <h2>Preview</h2>

        <div className="border border-black min-h-screen w-full md:w-80 rounded-md overflow-auto">
          <ul>
            {groupLinks.map((groupLink, index) => (
              <li key={index}>
                <a
                  href={groupLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {groupLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default App;
