import './Section.css'
function Section() {
    return (
      <>
          <div>
            <h3>GeneCards®: The Human Gene Database</h3>
            <h5>
                GeneCards is a searchable, integrative database that provides comprehensive, user-friendly information on all annotated and predicted human genes. The knowledgebase automatically integrates gene-centric data from ~150 web sources, including genomic, transcriptomic, proteomic, genetic, clinical and functional information.
            </h5>
          </div>
          <div>
            <h3>GeneCards®: The Human Gene Database</h3>
            <form className="search-bar">
                <input type="search" placeholder="Search..."></input>
                <button type='submit'>Search</button>
             </form>
          </div>
          <div>
            <span>Example</span>
            <span>djfjkfg</span>
            <span>Advanced</span>
          </div>
      </>
    );
  }
  
  export default Section;