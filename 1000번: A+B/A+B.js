/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1000                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: koriwan <boj.kr/u/koriwan>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1000                           #+#        #+#      #+#    */
/*   Solved: 2025/05/04 10:12:20 by koriwan       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
