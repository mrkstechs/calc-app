import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class Nine extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={this.props.onPress}>
                <Text>9</Text>
            </TouchableOpacity>
        )
    }
}

class Eight extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={this.props.onPress}>
                <Text>8</Text>
            </TouchableOpacity>
        )
    }
}

class Seven extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={() => console.log(this.props.number)}>
                <Text>7</Text>
            </TouchableOpacity>
        )
    }
}

class Six extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={() => console.log(this.props.number)}>
                <Text>6</Text>
            </TouchableOpacity>
        )
    }
}

class Five extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={() => console.log(this.props.number)}>
                <Text>5</Text>
            </TouchableOpacity>
        )
    }
}

class Four extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={() => console.log(this.props.number)}>
                <Text>4</Text>
            </TouchableOpacity>
        )
    }
}

class Three extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={() => console.log(this.props.number)}>
                <Text>3</Text>
            </TouchableOpacity>
        )
    }
}

class Two extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={() => console.log(this.props.number)}>
                <Text>2</Text>
            </TouchableOpacity>
        )
    }
}

class One extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtn} onPress={() => console.log(this.props.number)}>
                <Text>1</Text>
            </TouchableOpacity>
        )
    }
}

class Zero extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.numBtnLast} onPress={() => console.log(this.props.number)}>
                <Text>0</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    numBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.33%',
        height: '25%',
        backgroundColor: 'rgba(153,253,015, 0.7)',
        borderRightWidth: 0.5,
        borderColor: 'red',
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    numBtnLast: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '25%',
        backgroundColor: 'rgba(153,253,015, 0.7)',
        borderRightWidth: 0.5,
        borderColor: 'red',
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
    },
});

module.exports = {
    Nine,
    Eight,
    Seven,
    Six,
    Five,
    Four,
    Three,
    Two,
    One,
    Zero
}