import React from 'react';

import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';

import { Empty } from './Empty';
import { Img } from 'react-image';

import LiferayIcon from '../assets/images/liferay-icon.svg';

export const Results = (props) => {

    const { repos } = props;

    const listRepos = repos.length !== 0 ? (
        repos.data.map( (item) => (
            <div key={item.id} className="col-lg-4 col-md-6" id="results">
                <ClayCard>
                    <div id="header-card">
                        <div>
                            <Img src={LiferayIcon} />
                            <span>{item.full_name}</span>
                        </div>
                    </div>
                    <ClayCard.Body>
                        <ClayCard.Description truncate={false} displayType="text">
                            <div>
                                <div>
                                    <span className="item">Stars</span>
                                    <span>{item.stargazers_count}</span>
                                </div>
                                <div>
                                    <span className="item">Forks</span>
                                    <span>{item.forks_count}</span>
                                </div>
                                <div>
                                    <span className="item">Open Issues</span>
                                    <span>{item.open_issues_count}</span>
                                </div>
                                <div>
                                    <span className="item">Age</span>
                                    <span>{item.created_at}</span>
                                </div>
                                <div>
                                    <span className="item">Last commit</span>
                                    <span>{item.updated_at}</span>
                                </div>
                                <div>
                                    <span className="item">License</span>
                                    <span>Other</span>
                                </div>
                            </div>
                        </ClayCard.Description>
                        <ClayCard.Caption>
                            <ClayLabel displayType="success">{item.language}</ClayLabel>
                        </ClayCard.Caption>
                    </ClayCard.Body>
                </ClayCard>
            </div>
        ))
    ) : (
        <div>
            <Empty></Empty>
        </div>
    );

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {listRepos}
        </div>
    )
}
