import {ApolloClient} from '@apollo/client';

import {SsrComponent} from "../components/ssrComponent";
import {UseEffectComponent} from "../components/useEffectComponent";

const Topic = () => {
    console.log('Rendering Topic'); // Will be logged on server
    return <div>TopicPage: {typeof ApolloClient}<br/><SsrComponent/><br/><UseEffectComponent/></div>
}


export default Topic;
