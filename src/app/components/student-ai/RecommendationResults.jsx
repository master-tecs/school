export function RecommendationResults({ recommendations, setRecommendations }) {
    return (
      <div>
        <h2 className="text-center text-white mb-4">Your Recommendations</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{rec.schoolName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{rec.country}</h6>
                  <p className="card-text">
                    <strong>Program:</strong> {rec.program}<br />
                    <strong>Level:</strong> {rec.level}<br />
                    <strong>Admission Requirements:</strong> {rec.requirements}
                  </p>
                  <a href={rec.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button onClick={() => setRecommendations(null)} className="btn btn-secondary">Start Over</button>
        </div>
      </div>
    )
  }
  
  