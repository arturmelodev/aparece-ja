import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      //theme: ThemeData(scaffoldBackgroundColor: Colors.deepPurple[300]),
      home: Scaffold(
    appBar: AppBar(
      title: const Text('Aparece Já'),
      backgroundColor: Colors.deepPurple[300],
    ),
    body: SignInComponent(),
  )));
}

class SignInComponent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Row(children: [
        Expanded(
          child: Icon(Icons.account_box_sharp),
        ),
        SizedBox(
          width: MediaQuery.of(context).size.width * 0.8,
          height: MediaQuery.of(context).size.height * 0.2,
          child: TextField(
            obscureText: true,
            decoration: InputDecoration(
                border: UnderlineInputBorder(), labelText: 'CPF'),
          ),
        )
      ])
    ]);
  }
}
