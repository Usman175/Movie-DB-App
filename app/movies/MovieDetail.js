import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w300';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w780';


export default class MovieDetail extends Component{
	render(){
		return(
			<ScrollView>
				<Image source={{uri: BACKDROP_PATH + this.props.data.backdrop_path}} style={styles.backdrop} />
				<View style={styles.detail}>
					<Text style={styles.title}>{this.props.data.title}</Text>
					<Text style={styles.overview}>{this.props.data.overview}</Text>
				</View>
				<Image source={{uri: POSTER_PATH + this.props.data.poster_path}} elevation={7} style={styles.poster} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	backdrop: {
		height: 230,
		marginBottom: 30,
	},
	title: {
		fontSize: 24,
		marginBottom: 10,
	},
	overview: {
		fontSize: 18,

	},
	detail: {
		padding: 20,
	},
	poster: {
		height: 225,
		width: 150,
		position: 'absolute',
		backgroundColor: '#000000',
		top: 40,
		left: 20,
		shadowColor: '#000000',
		shadowOpacity: 0.6,
		shadowRadius: 7,
		shadowOffset: {
			height: 3,
			width: 3,
		},
		overflow: 'visible',
	},
})







