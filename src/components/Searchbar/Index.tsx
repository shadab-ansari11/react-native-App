import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import {Searchbar} from 'react-native-paper';


export interface SearchProps {
    placeholder?: string;
    searcStyle?:any;
}
export function SearchComp(props: SearchProps) {
    const { placeholder,searcStyle } = props;
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            <Searchbar
                placeholder={placeholder}
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={searcStyle}
            />
        </>


    );
};

const styles = StyleSheet.create({
   
});

