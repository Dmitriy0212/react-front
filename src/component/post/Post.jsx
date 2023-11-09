import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WithPostLoading from './WithPostLoading';
import Loadpost from './Loadpost';
import classes from "./Post.module.css";

const Post = () => {
    const { id } = useParams();
    const ListLoading = WithPostLoading(Loadpost);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    React.useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://178.20.153.133:8080/post?id=${id}`;
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setAppState({ loading: false, repos: allRepos });
        });
    }, [setAppState,id]);


    return (
        <>
            <div className={classes.conteyner}>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
            </div>
        </>
    );
};
export default Post;