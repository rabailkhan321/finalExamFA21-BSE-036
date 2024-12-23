// import { StyleSheet, Image } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import products from '@/assets/data/product';
// import ProductListItems from '@/components/ProductListItems';
// import { FlatList } from 'react-native';


// export default function TabOneScreen() {
//   return (
    
//     <FlatList data={products} renderItem={({item})=>(

//       <ProductListItems product={item}></ProductListItems>)}
//       numColumns={2}/> //also do container-> flex:1
    
    
//   );
// }

//2 without intro screen
// import { useEffect, useState } from 'react';
// import { StyleSheet, FlatList, View, Text } from 'react-native';
// import ProductListItems from '@/components/ProductListItems';
// import { supabase } from '@/supabase'; // Ensure this is correctly set up

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// export default function TabOneScreen() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from('products').select('*');
//       if (error) {
//         console.error('Error fetching products:', error.message);
//       } else {
//         setProducts(data as Product[]);
//       }
//       setLoading(false);
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={products}
//       renderItem={({ item }) => <ProductListItems product={item} />}
//       numColumns={2}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={styles.container} // This will ensure items are correctly aligned
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

 



//4 with 3 intro screen without reset
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import IntroScreen1 from '@/screens/IntroScreen1';
// import IntroScreen2 from '@/screens/IntroScreen2';
// import IntroScreen3 from '@/screens/IntroScreen3';
// import ProductListItems from '@/components/ProductListItems';
// import { supabase } from '@/supabase';

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
//   const [currentIntroScreen, setCurrentIntroScreen] = useState(0);

//   useEffect(() => {
//     const checkIntroStatus = async () => {
//       const seenIntro = await AsyncStorage.getItem('hasSeenIntro');
//       setHasSeenIntro(seenIntro ? true : false);
//     };

//     checkIntroStatus();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from('products').select('*');
//       if (error) {
//         console.error('Error fetching products:', error.message);
//       } else {
//         setProducts(data as Product[]);
//       }
//       setLoading(false);
//     };

//     if (hasSeenIntro === true) fetchProducts();
//   }, [hasSeenIntro]);

//   const handleIntroNext = () => {
//     setCurrentIntroScreen(currentIntroScreen + 1);
//   };

//   const handleIntroDone = async () => {
//     await AsyncStorage.setItem('hasSeenIntro', 'true');
//     setHasSeenIntro(true);
//   };

//   if (hasSeenIntro === null) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (!hasSeenIntro) {
//     if (currentIntroScreen === 0) {
//       return <IntroScreen1 onNext={handleIntroNext} />;
//     } else if (currentIntroScreen === 1) {
//       return <IntroScreen2 onNext={handleIntroNext} />;
//     } else {
//       return <IntroScreen3 onDone={handleIntroDone} />;
//     }
//   }

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={products}
//       renderItem={({ item }) => <ProductListItems product={item} />}
//       numColumns={2}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={styles.container}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


//5 3intro screen with reset
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import IntroScreen1 from '@/screens/IntroScreen1';
// import IntroScreen2 from '@/screens/IntroScreen2';
// import IntroScreen3 from '@/screens/IntroScreen3';
// import ProductListItems from '@/components/ProductListItems';
// import { supabase } from '@/supabase';

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
//   const [currentIntroScreen, setCurrentIntroScreen] = useState(0);

//   useEffect(() => {
//     const checkIntroStatus = async () => {
//       const seenIntro = await AsyncStorage.getItem('hasSeenIntro');
//       setHasSeenIntro(seenIntro ? true : false);
//     };

//     checkIntroStatus();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from('products').select('*');
//       if (error) {
//         console.error('Error fetching products:', error.message);
//       } else {
//         setProducts(data as Product[]);
//       }
//       setLoading(false);
//     };

//     if (hasSeenIntro === true) fetchProducts();
//   }, [hasSeenIntro]);

//   const handleIntroNext = () => {
//     setCurrentIntroScreen(currentIntroScreen + 1);
//   };

//   const handleIntroDone = async () => {
//     await AsyncStorage.setItem('hasSeenIntro', 'true');
//     setHasSeenIntro(true);
//   };

//   const resetIntroScreens = async () => {
//     await AsyncStorage.removeItem('hasSeenIntro');
//     setHasSeenIntro(false);
//     setCurrentIntroScreen(0);
//   };

//   if (hasSeenIntro === null) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (!hasSeenIntro) {
//     if (currentIntroScreen === 0) {
//       return <IntroScreen1 onNext={handleIntroNext} />;
//     } else if (currentIntroScreen === 1) {
//       return <IntroScreen2 onNext={handleIntroNext} />;
//     } else {
//       return <IntroScreen3 onDone={handleIntroDone} />;
//     }
//   }

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         renderItem={({ item }) => <ProductListItems product={item} />}
//         numColumns={2}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productContainer}
//       />
//       <Button
//         title="Show Intro Screens Again"
//         onPress={resetIntroScreens}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   productContainer: {
//     paddingBottom: 20,
//   },
// });

//with reset
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import IntroScreen1 from '@/screens/IntroScreen1';
// import IntroScreen2 from '@/screens/IntroScreen2';
// import IntroScreen3 from '@/screens/IntroScreen3';
// import ProductListItems from '@/components/ProductListItems';
// import { supabase } from '@/supabase';

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
//   const [currentIntroScreen, setCurrentIntroScreen] = useState(0);

//   useEffect(() => {
//     const checkIntroStatus = async () => {
//       const seenIntro = await AsyncStorage.getItem('hasSeenIntro');
//       setHasSeenIntro(seenIntro ? true : false);
//     };

//     checkIntroStatus();
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from('details').select('*'); // Updated table name
//       if (error) {
//         console.error('Error fetching details:', error.message); // Updated error message
//       } else {
//         setProducts(data as Product[]);
//       }
//       setLoading(false);
//     };

//     if (hasSeenIntro === true) fetchProducts();
//   }, [hasSeenIntro]);

//   const handleIntroNext = () => {
//     setCurrentIntroScreen(currentIntroScreen + 1);
//   };

//   const handleIntroDone = async () => {
//     await AsyncStorage.setItem('hasSeenIntro', 'true');
//     setHasSeenIntro(true);
//   };

//   const resetIntroScreens = async () => {
//     await AsyncStorage.removeItem('hasSeenIntro');
//     setHasSeenIntro(false);
//     setCurrentIntroScreen(0);
//   };

//   if (hasSeenIntro === null) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (!hasSeenIntro) {
//     if (currentIntroScreen === 0) {
//       return <IntroScreen1 onNext={handleIntroNext} />;
//     } else if (currentIntroScreen === 1) {
//       return <IntroScreen2 onNext={handleIntroNext} />;
//     } else {
//       // Pass onNext to IntroScreen3 to handle the "done" action
//       return <IntroScreen3 onNext={handleIntroDone} />;
//     }
//   }

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         renderItem={({ item }) => <ProductListItems product={item} />}
//         numColumns={2}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.productContainer}
//       />
//       <Button title="Show Intro Screens Again" onPress={resetIntroScreens} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   productContainer: {
//     paddingBottom: 20,
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IntroScreen1 from '@/screens/IntroScreen1';
import IntroScreen2 from '@/screens/IntroScreen2';
import IntroScreen3 from '@/screens/IntroScreen3';
import ProductListItems from '@/components/ProductListItems';
import { supabase } from '@/supabase';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean | null>(null);
  const [currentIntroScreen, setCurrentIntroScreen] = useState(0);
  const [priceFilter, setPriceFilter] = useState('lowToHigh'); // Default to low to high

  useEffect(() => {
    const checkIntroStatus = async () => {
      const seenIntro = await AsyncStorage.getItem('hasSeenIntro');
      setHasSeenIntro(seenIntro ? true : false);
    };

    checkIntroStatus();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('details').select('*');
      if (error) {
        console.error('Error fetching details:', error.message);
      } else {
        setProducts(data as Product[]);
        setFilteredProducts(data as Product[]); // Initialize with full product list
      }
      setLoading(false);
    };

    if (hasSeenIntro === true) fetchProducts();
  }, [hasSeenIntro]);

  const handleIntroNext = () => {
    setCurrentIntroScreen(currentIntroScreen + 1);
  };

  const handleIntroDone = async () => {
    await AsyncStorage.setItem('hasSeenIntro', 'true');
    setHasSeenIntro(true);
  };

  const resetIntroScreens = async () => {
    await AsyncStorage.removeItem('hasSeenIntro');
    setHasSeenIntro(false);
    setCurrentIntroScreen(0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handlePriceFilter = (filter: string) => {
    setPriceFilter(filter);
    let sortedProducts;
    if (filter === 'lowToHigh') {
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (filter === 'highToLow') {
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  if (hasSeenIntro === null) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!hasSeenIntro) {
    if (currentIntroScreen === 0) {
      return <IntroScreen1 onNext={handleIntroNext} />;
    } else if (currentIntroScreen === 1) {
      return <IntroScreen2 onNext={handleIntroNext} />;
    } else {
      return <IntroScreen3 onNext={handleIntroDone} />;
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Price Filter - Button Group */}
      <View style={styles.filterContainer}>
        <Text>Sort by Price:</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, priceFilter === 'lowToHigh' && styles.selectedButton]}
            onPress={() => handlePriceFilter('lowToHigh')}
          >
            <Text style={styles.buttonText}>Lowest to Highest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, priceFilter === 'highToLow' && styles.selectedButton]}
            onPress={() => handlePriceFilter('highToLow')}
          >
            <Text style={styles.buttonText}>Highest to Lowest</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductListItems product={item} />}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productContainer}
      />

<Button
  title="Go to home page"
  onPress={resetIntroScreens}
  color="#f8bbd0" // Light pink color
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  filterContainer: {
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#f8bbd0',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  productContainer: {
    paddingBottom: 20,
  },
});
