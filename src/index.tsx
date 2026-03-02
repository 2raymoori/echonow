import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index(props: any) {
  console.log(props)
  const blurhash = 'LKO2?U00000000000000000000000000000';
  return (
    <View style={styles.container}>
      <Text>HEYYYEcho Now...</Text>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      <Image
        source={{ uri: "https://njies-shop-mini-commerce.s3.eu-west-3.amazonaws.com/Espressomaschine_10045424_9.avif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXWYNDNYM7SXLAZSD%2F20260228%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260228T094204Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMyJHMEUCIClOnjy1ye%2BVK4JSWxqslGFyUkpXuAK3GQHZLbhfNfU8AiEAuMt4KXqHmxImTr%2F0vQhuDRbVgqrVEZHIb671TA%2FBa7oq7wIIUxAAGgw1Mjk5MTkwNzc5MTMiDL554wVHMoIpaMLruSrMAm72NViPEZpfFFrFdZnenDK4Ok8Y5Qq0imIAcfxVJlcMpNJSV%2FUpYbaJH97WYp8fN8MNgFgY2EH9asAR1e3TF484kFaSoXKiXrQj35S5HZ8PM9OLoQaSl%2FaZYPUH66P05R0nX5p2v%2FaGBapSj%2FB0aRoRSApEfzVkOkFY0pVE9Zcl6K3So%2FB2SOItLPltkY5%2F%2Fs%2FLqXFWycWoQHFH7LN%2BTybrD1YcIyGmiGjlkdcuXk2Hd5jAm3f4UtK%2F2i6X0%2BwePqZMDenl4MSpt%2FUOim4j2%2FuiiLfZXK5wdjKwoe%2BiZz3B%2F54N8JjYfng7mv4LOLfjMWAYZ7BLC0WKAaAcDIHgG0IXIAaVjwQfZnE%2BCtMiTmhPyNmgUKYRgn%2BXKRMHsJR6JL0dwkaNpRMw7gYNgzJiXSzwKspE4iKLFN4N4hJS7Xh0mL1tfqcDRpYrLGGDMMrwis0GOq0CS8QVfnsR5buVijQLQYbcbZcZU6RGFfy5seuPpsPCjf9mfQjdI0i%2FJVjnx%2Fw5g%2FYfEPyZZKFnOmdapwPVLbnZVD4VuYdMZo6u9UcJvWFP6H6vcmZSL0DyH6YcU2aJwgygZwoI5S3aRSR7odLZmtt9YBJnxxIVf9GozKB3Jr1idRcGIV847cgwCbVuo5VeW0fwpLgs7jaSoAINpcFe2OJtM2MPT2jVCHUq1irzCy2ONCKOCdY6o3sQt4r5%2FGbzIIkmO678%2FGsq4NDsu2R5Y%2FIlVc0Xuvf8%2F3tzeE9aTPvBKHqDx2XDvNOxs17H74tmXaTYZJS3wVXyR%2FmsLuSqq3nle4YXdc5i%2F0WtqVSWWqUbeMHRmWqNaCng0v%2Bm6eRIzk7MZAbt%2FDtOk%2BJ6JEIkcA%3D%3D&X-Amz-Signature=339ee8d9aba507422a3918a9f6d0f5f326c94bf60a7b411088cc68c115689959&X-Amz-SignedHeaders=host&response-content-disposition=inline" }}
        style={{ width: 100, height: 100, backgroundColor: "red", borderRadius: 10, marginTop: 10 }}
      />

      <Image
        source={require("../../assets/images/profile_pic_final.jpg")}
        style={{ width: 100, height: 100, backgroundColor: "red", borderRadius: 10, marginTop: 10 }}
      />
      <TextInput placeholder="Enter your name" style={{ backgroundColor: "white", borderRadius: 10, marginTop: 10 }} />
      <ActivityIndicator size={"large"} color={"white"} />
      <Link href="/about">About echonow</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange"
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
