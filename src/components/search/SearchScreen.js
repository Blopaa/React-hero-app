import React, { useMemo } from "react";
// import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { GetHeroByName } from "../../selectors/GetHeroByName";

export const SearchScreen = React.memo(({ history }) => {
  const location = useLocation();
  const { q = "" } = useMemo(() => queryString.parse(location.search), [
    location.search,
  ]);
  // const {q = ''} = queryString.parse(location.search)
  // console.log(q);

  const [values, handleSearch] = useForm({
    HeroSearch: q,
  });
  // console.log(q);
  const {HeroSearch} = values;
  const heroesFilter = GetHeroByName(HeroSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${HeroSearch}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              value={HeroSearch}
              name="HeroSearch"
              onChange={handleSearch}
              type="text"
              placeholder="find your hero"
              className="form-control"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />

          {
            (q === '')
            && <div className="alert alert-info">Search a hero</div>
          }
           {
            (q !== '' && heroesFilter.length === 0)
            && <div className="alert alert-danger">there is no hero called {q}</div>
          }

          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
});
