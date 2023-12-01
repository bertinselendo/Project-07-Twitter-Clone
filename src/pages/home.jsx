import React from 'react';
import TweetsList from '../components/tweetsList';
import HomeHeader from '../components/HomeHeader';
import TweetEditor from '../components/TweetEditor';

function Home() {
    return (
        <main className="timeline">
            <HomeHeader />
            <TweetEditor />
            <TweetsList />
        </main>

    );
}

export default Home;