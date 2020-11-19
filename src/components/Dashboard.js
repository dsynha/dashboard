import React, { useState } from 'react';
import { Results } from './Results';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Link } from 'react-router-dom';

import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';
import ClayForm, {ClayInput} from '@clayui/form';

import { Img } from 'react-image';
import Logo from '../assets/images/github-logo.svg';
import Star from '../assets/images/star1.svg';
import Theme from '../assets/images/theme.svg';
import Cards from '../assets/images/cards.svg';
import Add from '../assets/images/add.svg';
import SearchIcon from '../assets/images/search.svg';
import List from '../assets/images/list.svg';

import axios from 'axios';

export const Dashboard = () => {

    const spritemap = "https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg";

    /* MODAL */
        const [visible, setVisible] = useState(false);
        const { observer, onClose } = useModal({
        onClose: () => setVisible(false)
        });
    /* END MODAL */

    /* DROPDOWN */
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const toggle = () => setDropdownOpen(prevState => !prevState);
    /* END DROPDOWN */

    /* API */
        const [searchInput, setSearchInput] = useState('');
        const [repos, setRepos] = useState([]);

        const handleChange = (e) => {
            setSearchInput(e.target.value);
        }

        const handleClick = async () => {
            try{
                const result = await axios('https://api.github.com/users/' + searchInput + '/repos');
                setRepos(result);
            }catch(err){
                console.log(err);
            }
        }
    /* END API */

    return (
        <div>
            {/* HEADER */}
                <div id="header" className="d-flex flex-row justify-content-around align-items-center">
                    <div className="d-flex align-items-center logo margem">
                        <div>
                            <Img src={Logo} className="logoIcon" />
                        </div>
                        <div>
                            <span>GitHub Compare</span>
                        </div>
                    </div>
                    <div className="margem">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Filter and order
                            </DropdownToggle>
                            <DropdownMenu center>
                                <DropdownItem>
                                    <Img className="marginRight" src={Cards} />
                                    Cards
                                </DropdownItem>
                                <DropdownItem>
                                    <Img className="marginRight" src={List} />
                                    List
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div className="margem">
                        <InputGroup>
                            <Input type="text" placeholder="Search" id="search-input" value={searchInput} onChange={handleChange} />
                            <InputGroupAddon addonType="append">
                                <Button className="search-button" onClick={handleClick} ><Img src={SearchIcon} /></Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="d-flex align-items-center botoes margem">
                        <div>
                            <Link>
                                <Img src={Star} className="star" />
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <Img src={Theme} className="theme" />
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <Img src={Cards} className="cards" />
                            </Link>
                        </div>
                    </div>
                    <div className="margem">
                        <Link onClick={() => setVisible(true)}>
                            <Img src={Add} className="add" />
                        </Link>
                    </div>
                </div>
            {/* END HEADER */}

            <div>
                <Results repos={repos}></Results>
            </div>

            {/* MODAL */}
                <div id="add-modal">
                    <>
                        {visible && (
                            <ClayModal
                            observer={observer}
                            size="lg"
                            spritemap={spritemap}
                            status="info"
                            >
                            <ClayModal.Body>
                                <h2>New repository</h2>
                                <ClayForm.Group>
                                    <label htmlFor="basicInputText">Repository *</label>
                                    <ClayInput
                                        id="basicInputText"
                                        type="text"
                                        required
                                    />
                                </ClayForm.Group>
                            </ClayModal.Body>
                            <ClayModal.Footer
                                first={
                                <ClayButton.Group spaced>
                                    <ClayButton displayType="secondary" onClick={onClose}>{"Cancel"}</ClayButton>
                                </ClayButton.Group>
                                }
                                last={<ClayButton>{"Add"}</ClayButton>}
                            />
                            </ClayModal>
                        )}
                    </>
                </div>
            {/* END MODAL */}
        </div>
    )
}
