import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  // render
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyEx = item => item.u_id.toString();

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.headerText}>News App</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={style.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={keyEx}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    paddingBottom: 30,
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontSize: 45,
    fontWeight: 'bold',
  },
});

export default App;
