import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { episodesActions } from "../../redux/slices/episodes.slice";

import { Episode } from "../Episode/Episode";

const Episodes = () => {

    const { episodes, prev, next } = useSelector(({ episodes }) => episodes);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({ page: "1" })

    useEffect(() => {
        dispatch(episodesActions.getAll({ page: query.get("page") }))
    }, [dispatch, query]);

    const nextPage = () => {
        const nextPage = +query.get("page") + 1;
        setQuery({page:`${nextPage}`});
    };

    const prevPage=()=>{
        const prevPage = +query.get("page") - 1;
        setQuery({page:`${prevPage}`});
    }

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode} />)}
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>
        </div>
    )
};

export { Episodes };