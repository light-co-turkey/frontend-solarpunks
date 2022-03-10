import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Loading from '../components/Loading';
import { TextBtn } from "../components/ui/Buttons"
import { InputGroup, InputPrep } from '../components/ui/Inputs';

export const Post = props => {
    const {toolbarT, isLoaded, postMeta, usersList, onEditorChange, editorState, post, variant} = props
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="">
            <PostMetaView className="ml-3" isLoaded={isLoaded} postMeta={postMeta} usersList={usersList} />
            <CustomEditor toolbarHidden={toolbarT} readOnly={toolbarT} editorState={editToggle ? post : editorState} onEditorStateChange={onEditorChange} variant={variant} />
        </div>
    )
}