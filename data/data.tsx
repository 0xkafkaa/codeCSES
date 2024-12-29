const problems = [
  {
    id: 1068,
    name: "Weird Algorithm",
    question:
      "Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. For example, the sequence for n = 3 is as follows:\n3 → 10 → 5 → 16 → 8 → 4 → 2 → 1\nYour task is to simulate the execution of the algorithm for a given value of n.",
    tags: "Introductory Problems",
  },
  {
    id: 1083,
    name: "Missing Number",
    question:
      "You are given all numbers between 1, 2, …, n except one. Your task is to find the missing number.",
    tags: "Introductory Problems",
  },
  {
    id: 1069,
    name: "Repetitions",
    question:
      "You are given a DNA sequence: a string consisting of characters A, C, G, and T. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.",
    tags: "Introductory Problems",
  },
  {
    id: 1094,
    name: "Increasing Array",
    question:
      "You are given an array of n integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element. On each move, you may increase the value of any element by one. What is the minimum number of moves required?",
    tags: "Introductory Problems",
  },
  {
    id: 1070,
    name: "Permutations",
    question:
      "A permutation of integers 1, 2, …, n is called beautiful if there are no adjacent elements whose difference is 1. Given n, construct a beautiful permutation if such a permutation exists.",
    tags: "Introductory Problems",
  },
  {
    id: 1071,
    name: "Number Spiral",
    question:
      "A number spiral is an infinite grid whose upper-left square has number 1. Here are the first five layers of the spiral: Your task is to find out the number in row y and column x.",
    tags: "Introductory Problems",
  },
  {
    id: 1072,
    name: "Two Knights",
    question:
      "Your task is to count for k = 1, 2, …, n the number of ways two knights can be placed on a k × k chessboard so that they do not attack each other.",
    tags: "Introductory Problems",
  },
  {
    id: 1092,
    name: "Two Sets",
    question:
      "Your task is to divide the numbers 1, 2, …, n into two sets of equal sum.",
    tags: "Introductory Problems",
  },
  {
    id: 1617,
    name: "Bit Strings",
    question:
      "Your task is to calculate the number of bit strings of length n. For example, if n = 3, the correct answer is 8, because the possible bit strings are 000, 001, 010, 011, 100, 101, 110, and 111.",
    tags: "Introductory Problems",
  },
  {
    id: 1618,
    name: "Trailing Zeros",
    question:
      "Your task is to calculate the number of trailing zeros in the factorial n!. For example, 20! = 2432902008176640000 and it has 4 trailing zeros.",
    tags: "Introductory Problems",
  },
  {
    id: 1754,
    name: "Coin Piles",
    question:
      "You have two coin piles containing a and b coins. On each move, you can either remove one coin from the left pile and two coins from the right pile, or two coins from the left pile and one coin from the right pile. Your task is to efficiently find out if you can empty both the piles.",
    tags: "Introductory Problems",
  },
  {
    id: 1755,
    name: "Palindrome Reorder",
    question:
      "Given a string, your task is to reorder its letters in such a way that it becomes a palindrome (i.e., it reads the same forwards and backwards).",
    tags: "Introductory Problems",
  },
  {
    id: 2205,
    name: "Gray Code",
    question:
      "A Gray code is a list of all 2^(n) bit strings of length n, where any two successive strings differ in exactly one bit (i.e., their Hamming distance is one). Your task is to create a Gray code for a given length n.",
    tags: "Introductory Problems",
  },
  {
    id: 2165,
    name: "Tower of Hanoi",
    question:
      "The Tower of Hanoi game consists of three stacks (left, middle and right) and n round disks of different sizes. Initially, the left stack has all the disks, in increasing order of size from top to bottom. The goal is to move all the disks to the right stack using the middle stack. On each move you can move the uppermost disk from a stack to another stack. In addition, it is not allowed to place a larger disk on a smaller disk. Your task is to find a solution that minimizes the number of moves.",
    tags: "Introductory Problems",
  },
  {
    id: 1622,
    name: "Creating Strings",
    question:
      "Given a string, your task is to generate all different strings that can be created using its characters.",
    tags: "Introductory Problems",
  },
  {
    id: 1623,
    name: "Apple Division",
    question:
      "There are n apples with known weights. Your task is to divide the apples into two groups so that the difference between the weights of the groups is minimal.",
    tags: "Introductory Problems",
  },
  {
    id: 1624,
    name: "Chessboard and Queens",
    question:
      "Your task is to place eight queens on a chessboard so that no two queens are attacking each other. As an additional challenge, each square is either free or reserved, and you can only place queens on the free squares. However, the reserved squares do not prevent queens from attacking each other. How many possible ways are there to place the queens?",
    tags: "Introductory Problems",
  },
  {
    id: 2431,
    name: "Digit Queries",
    question:
      "Consider an infinite string that consists of all positive integers in increasing order:\n12345678910111213141516171819202122232425...\nYour task is to process q queries of the form: what is the digit at position k in the string?",
    tags: "Introductory Problems",
  },
  {
    id: 1625,
    name: "Grid Paths",
    question:
      "There are 88418 paths in a 7 × 7 grid from the upper-left square to the lower-left square. Each path corresponds to a 48-character description consisting of characters\nD\n(down),\nU\n(up),\nL\n(left) and\nR\n(right). For example, the path corresponds to the description\nDRURRRRRDDDLUULDDDLDRRURDDLLLLLURULURRUULDLLDDDD\n. You are given a description of a path which may also contain characters\n?\n(any direction). Your task is to calculate the number of paths that match the description.",
    tags: "Introductory Problems",
  },
  {
    id: 1621,
    name: "Distinct Numbers",
    question:
      "You are given a list of n integers, and your task is to calculate the number of distinct values in the list.",
    tags: "Sorting and Searching",
  },
  {
    id: 1084,
    name: "Apartments",
    question:
      "There are n applicants and m free apartments. Your task is to distribute the apartments so that as many applicants as possible will get an apartment. Each applicant has a desired apartment size, and they will accept any apartment whose size is close enough to the desired size.",
    tags: "Sorting and Searching",
  },
  {
    id: 1090,
    name: "Ferris Wheel",
    question:
      "There are n children who want to go to a Ferris wheel, and your task is to find a gondola for each child. Each gondola may have one or two children in it, and in addition, the total weight in a gondola may not exceed x. You know the weight of every child. What is the minimum number of gondolas needed for the children?",
    tags: "Sorting and Searching",
  },
  {
    id: 1091,
    name: "Concert Tickets",
    question:
      "There are n concert tickets available, each with a certain price. Then, m customers arrive, one after another. Each customer announces the maximum price they are willing to pay for a ticket, and after this, they will get a ticket with the nearest possible price such that it does not exceed the maximum price.",
    tags: "Sorting and Searching",
  },
  {
    id: 1619,
    name: "Restaurant Customers",
    question:
      "You are given the arrival and leaving times of n customers in a restaurant. What was the maximum number of customers in the restaurant at any time?",
    tags: "Sorting and Searching",
  },
  {
    id: 1629,
    name: "Movie Festival",
    question:
      "In a movie festival n movies will be shown. You know the starting and ending time of each movie. What is the maximum number of movies you can watch entirely?",
    tags: "Sorting and Searching",
  },
  {
    id: 1640,
    name: "Sum of Two Values",
    question:
      "You are given an array of n integers, and your task is to find two values (at distinct positions) whose sum is x.",
    tags: "Sorting and Searching",
  },
  {
    id: 1643,
    name: "Maximum Subarray Sum",
    question:
      "Given an array of n integers, your task is to find the maximum sum of values in a contiguous, nonempty subarray.",
    tags: "Sorting and Searching",
  },
  {
    id: 1074,
    name: "Stick Lengths",
    question:
      "There are n sticks with some lengths. Your task is to modify the sticks so that each stick has the same length. You can either lengthen and shorten each stick. Both operations cost x where x is the difference between the new and original length. What is the minimum total cost?",
    tags: "Sorting and Searching",
  },
  {
    id: 2183,
    name: "Missing Coin Sum",
    question:
      "You have n coins with positive integer values. What is the smallest sum you cannot create using a subset of the coins?",
    tags: "Sorting and Searching",
  },
  {
    id: 2216,
    name: "Collecting Numbers",
    question:
      "You are given an array that contains each number between 1…n exactly once. Your task is to collect the numbers from 1 to n in increasing order. On each round, you go through the array from left to right and collect as many numbers as possible. What will be the total number of rounds?",
    tags: "Sorting and Searching",
  },
  {
    id: 2217,
    name: "Collecting Numbers II",
    question:
      "You are given an array that contains each number between 1…n exactly once. Your task is to collect the numbers from 1 to n in increasing order. On each round, you go through the array from left to right and collect as many numbers as possible. Given m operations that swap two numbers in the array, your task is to report the number of rounds after each operation.",
    tags: "Sorting and Searching",
  },
  {
    id: 1141,
    name: "Playlist",
    question:
      "You are given a playlist of a radio station since its establishment. The playlist has a total of n songs. What is the longest sequence of successive songs where each song is unique?",
    tags: "Sorting and Searching",
  },
  {
    id: 1073,
    name: "Towers",
    question:
      "You are given n cubes in a certain order, and your task is to build towers using them. Whenever two cubes are one on top of the other, the upper cube must be smaller than the lower cube. You must process the cubes in the given order. You can always either place the cube on top of an existing tower, or begin a new tower. What is the minimum possible number of towers?",
    tags: "Sorting and Searching",
  },
  {
    id: 1163,
    name: "Traffic Lights",
    question:
      "There is a street of length x whose positions are numbered 0, 1, …, x. Initially there are no traffic lights, but n sets of traffic lights are added to the street one after another. Your task is to calculate the length of the longest passage without traffic lights after each addition.",
    tags: "Sorting and Searching",
  },
  {
    id: 2162,
    name: "Josephus Problem I",
    question:
      "Consider a game where there are n children (numbered 1, 2, …, n) in a circle. During the game, every second child is removed from the circle, until there are no children left. In which order will the children be removed?",
    tags: "Sorting and Searching",
  },
  {
    id: 2163,
    name: "Josephus Problem II",
    question:
      "Consider a game where there are n children (numbered 1, 2, …, n) in a circle. During the game, repeatedly k children are skipped and one child is removed from the circle. In which order will the children be removed?",
    tags: "Sorting and Searching",
  },
  {
    id: 2168,
    name: "Nested Ranges Check",
    question:
      "Given n ranges, your task is to determine for each range if it contains some other range and if some other range contains it. Range [a,b] contains range [c,d] if a ≤ c and d ≤ b.",
    tags: "Sorting and Searching",
  },
  {
    id: 2169,
    name: "Nested Ranges Count",
    question:
      "Given n ranges, your task is to count for each range how many other ranges it contains and how many other ranges contain it. Range [a,b] contains range [c,d] if a ≤ c and d ≤ b.",
    tags: "Sorting and Searching",
  },
  {
    id: 1164,
    name: "Room Allocation",
    question:
      "There is a large hotel, and n customers will arrive soon. Each customer wants to have a single room. You know each customer’s arrival and departure day. Two customers can stay in the same room if the departure day of the first customer is earlier than the arrival day of the second customer. What is the minimum number of rooms that are needed to accommodate all customers? And how can the rooms be allocated?",
    tags: "Sorting and Searching",
  },
  {
    id: 1620,
    name: "Factory Machines",
    question:
      "A factory has n machines which can be used to make products. Your goal is to make a total of t products. For each machine, you know the number of seconds it needs to make a single product. The machines can work simultaneously, and you can freely decide their schedule. What is the shortest time needed to make t products?",
    tags: "Sorting and Searching",
  },
  {
    id: 1630,
    name: "Tasks and Deadlines",
    question:
      "You have to process n tasks. Each task has a duration and a deadline, and you will process the tasks in some order one after another. Your reward for a task is d − f where d is its deadline and f is your finishing time. (The starting time is 0, and you have to process all tasks even if a task would yield negative reward.) What is your maximum reward if you act optimally?",
    tags: "Sorting and Searching",
  },
  {
    id: 1631,
    name: "Reading Books",
    question:
      "There are n books, and Kotivalo and Justiina are going to read them all. For each book, you know the time it takes to read it. They both read each book from beginning to end, and they cannot read a book at the same time. What is the minimum total time required?",
    tags: "Sorting and Searching",
  },
  {
    id: 1641,
    name: "Sum of Three Values",
    question:
      "You are given an array of n integers, and your task is to find three values (at distinct positions) whose sum is x.",
    tags: "Sorting and Searching",
  },
  {
    id: 1642,
    name: "Sum of Four Values",
    question:
      "You are given an array of n integers, and your task is to find four values (at distinct positions) whose sum is x.",
    tags: "Sorting and Searching",
  },
  {
    id: 1645,
    name: "Nearest Smaller Values",
    question:
      "Given an array of n integers, your task is to find for each array position the nearest position to its left having a smaller value.",
    tags: "Sorting and Searching",
  },
  {
    id: 1660,
    name: "Subarray Sums I",
    question:
      "Given an array of n positive integers, your task is to count the number of subarrays having sum x.",
    tags: "Sorting and Searching",
  },
  {
    id: 1661,
    name: "Subarray Sums II",
    question:
      "Given an array of n integers, your task is to count the number of subarrays having sum x.",
    tags: "Sorting and Searching",
  },
  {
    id: 1662,
    name: "Subarray Divisibility",
    question:
      "Given an array of n integers, your task is to count the number of subarrays where the sum of values is divisible by n.",
    tags: "Sorting and Searching",
  },
  {
    id: 2428,
    name: "Subarray Distinct Values",
    question:
      "Given an array of n integers, your task is to calculate the number of subarrays that have at most k distinct values.",
    tags: "Sorting and Searching",
  },
  {
    id: 1085,
    name: "Array Division",
    question:
      "You are given an array containing n positive integers. Your task is to divide the array into k subarrays so that the maximum sum in a subarray is as small as possible.",
    tags: "Sorting and Searching",
  },
  {
    id: 1076,
    name: "Sliding Median",
    question:
      "You are given an array of n integers. Your task is to calculate the median of each window of k elements, from left to right. The median is the middle element when the elements are sorted. If the number of elements is even, there are two possible medians and we assume that the median is the smaller of them.",
    tags: "Sorting and Searching",
  },
  {
    id: 1077,
    name: "Sliding Cost",
    question:
      "You are given an array of n integers. Your task is to calculate for each window of k elements, from left to right, the minimum total cost of making all elements equal. You can increase or decrease each element with cost x where x is the difference between the new and the original value. The total cost is the sum of such costs.",
    tags: "Sorting and Searching",
  },
  {
    id: 1632,
    name: "Movie Festival II",
    question:
      "In a movie festival, n movies will be shown. Syrjälä’s movie club consists of k members, who will be all attending the festival. You know the starting and ending time of each movie. What is the maximum total number of movies the club members can watch entirely if they act optimally?",
    tags: "Sorting and Searching",
  },
  {
    id: 1644,
    name: "Maximum Subarray Sum II",
    question:
      "Given an array of n integers, your task is to find the maximum sum of values in a contiguous subarray with length between a and b.",
    tags: "Sorting and Searching",
  },
  {
    id: 1633,
    name: "Dice Combinations",
    question:
      "Your task is to count the number of ways to construct sum n by throwing a dice one or more times. Each throw produces an outcome between 1 and 6. For example, if n = 3, there are 4 ways:\n\n- 1 + 1 + 1\n- 1 + 2\n- 2 + 1\n- 3",
    tags: "Dynamic Programming",
  },
  {
    id: 1634,
    name: "Minimizing Coins",
    question:
      "Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to produce a sum of money x using the available coins in such a way that the number of coins is minimal. For example, if the coins are {1, 5, 7} and the desired sum is 11, an optimal solution is 5 + 5 + 1 which requires 3 coins.",
    tags: "Dynamic Programming",
  },
  {
    id: 1635,
    name: "Coin Combinations I",
    question:
      "Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ways you can produce a money sum x using the available coins. For example, if the coins are {2, 3, 5} and the desired sum is 9, there are 8 ways:\n\n- 2 + 2 + 5\n- 2 + 5 + 2\n- 5 + 2 + 2\n- 3 + 3 + 3\n- 2 + 2 + 2 + 3\n- 2 + 2 + 3 + 2\n- 2 + 3 + 2 + 2\n- 3 + 2 + 2 + 2",
    tags: "Dynamic Programming",
  },
  {
    id: 1636,
    name: "Coin Combinations II",
    question:
      "Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ordered ways you can produce a money sum x using the available coins. For example, if the coins are {2, 3, 5} and the desired sum is 9, there are 3 ways:\n\n- 2 + 2 + 5\n- 3 + 3 + 3\n- 2 + 2 + 2 + 3",
    tags: "Dynamic Programming",
  },
  {
    id: 1637,
    name: "Removing Digits",
    question:
      "You are given an integer n. On each step, you may subtract one of the digits from the number. How many steps are required to make the number equal to 0?",
    tags: "Dynamic Programming",
  },
  {
    id: 1638,
    name: "Grid Paths",
    question:
      "Consider an n × n grid whose squares may have traps. It is not allowed to move to a square with a trap. Your task is to calculate the number of paths from the upper-left square to the lower-right square. You can only move right or down.",
    tags: "Dynamic Programming",
  },
  {
    id: 1158,
    name: "Book Shop",
    question:
      "You are in a book shop which sells n different books. You know the price and number of pages of each book. You have decided that the total price of your purchases will be at most x. What is the maximum number of pages you can buy? You can buy each book at most once.",
    tags: "Dynamic Programming",
  },
  {
    id: 1746,
    name: "Array Description",
    question:
      "You know that an array has n integers between 1 and m, and the absolute difference between two adjacent values is at most 1. Given a description of the array where some values may be unknown, your task is to count the number of arrays that match the description.",
    tags: "Dynamic Programming",
  },
  {
    id: 2413,
    name: "Counting Towers",
    question:
      "Your task is to build a tower whose width is 2 and height is n. You have an unlimited supply of blocks whose width and height are integers. For example, here are some possible solutions for n = 6: Given n, how many different towers can you build? Mirrored and rotated towers are counted separately if they look different.",
    tags: "Dynamic Programming",
  },
  {
    id: 1639,
    name: "Edit Distance",
    question:
      "The edit distance between two strings is the minimum number of operations required to transform one string into the other. The allowed operations are:\n\n- Add one character to the string.\n- Remove one character from the string.\n- Replace one character in the string.\n\nFor example, the edit distance between LOVE and MOVIE is 2, because you can first replace L with M, and then add I. Your task is to calculate the edit distance between two strings.",
    tags: "Dynamic Programming",
  },
  {
    id: 1744,
    name: "Rectangle Cutting",
    question:
      "Given an a × b rectangle, your task is to cut it into squares. On each move you can select a rectangle and cut it into two rectangles in such a way that all side lengths remain integers. What is the minimum possible number of moves?",
    tags: "Dynamic Programming",
  },
  {
    id: 1745,
    name: "Money Sums",
    question:
      "You have n coins with certain values. Your task is to find all money sums you can create using these coins.",
    tags: "Dynamic Programming",
  },
  {
    id: 1097,
    name: "Removal Game",
    question:
      "There is a list of n numbers and two players who move alternately. On each move, a player removes either the first or last number from the list, and their score increases by that number. Both players try to maximize their scores. What is the maximum possible score for the first player when both players play optimally?",
    tags: "Dynamic Programming",
  },
  {
    id: 1093,
    name: "Two Sets II",
    question:
      "Your task is to count the number of ways numbers 1, 2, …, n can be divided into two sets of equal sum. For example, if n = 7, there are four solutions:\n\n- {1, 3, 4, 6} and {2, 5, 7}\n- {1, 2, 5, 6} and {3, 4, 7}\n- {1, 2, 4, 7} and {3, 5, 6}\n- {1, 6, 7} and {2, 3, 4, 5}",
    tags: "Dynamic Programming",
  },
  {
    id: 1145,
    name: "Increasing Subsequence",
    question:
      "You are given an array containing n integers. Your task is to determine the longest increasing subsequence in the array, i.e., the longest subsequence where every element is larger than the previous one. A subsequence is a sequence that can be derived from the array by deleting some elements without changing the order of the remaining elements.",
    tags: "Dynamic Programming",
  },
  {
    id: 1140,
    name: "Projects",
    question:
      "There are n projects you can attend. For each project, you know its starting and ending days and the amount of money you would get as reward. You can only attend one project during a day. What is the maximum amount of money you can earn?",
    tags: "Dynamic Programming",
  },
  {
    id: 1653,
    name: "Elevator Rides",
    question:
      "There are n people who want to get to the top of a building which has only one elevator. You know the weight of each person and the maximum allowed weight in the elevator. What is the minimum number of elevator rides?",
    tags: "Dynamic Programming",
  },
  {
    id: 2181,
    name: "Counting Tilings",
    question:
      "Your task is to count the number of ways you can fill an n × m grid using 1 × 2 and 2 × 1 tiles.",
    tags: "Dynamic Programming",
  },
  {
    id: 2220,
    name: "Counting Numbers",
    question:
      "Your task is to count the number of integers between a and b where no two adjacent digits are the same.",
    tags: "Dynamic Programming",
  },
  {
    id: 1192,
    name: "Counting Rooms",
    question:
      "You are given a map of a building, and your task is to count the number of its rooms. The size of the map is n × m squares, and each square is either floor or wall. You can walk left, right, up, and down through the floor squares.",
    tags: "Graph Algorithms",
  },
  {
    id: 1193,
    name: "Labyrinth",
    question:
      "You are given a map of a labyrinth, and your task is to find a path from start to end. You can walk left, right, up and down.",
    tags: "Graph Algorithms",
  },
  {
    id: 1666,
    name: "Building Roads",
    question:
      "Byteland has n cities, and m roads between them. The goal is to construct new roads so that there is a route between any two cities. Your task is to find out the minimum number of roads required, and also determine which roads should be built.",
    tags: "Graph Algorithms",
  },
  {
    id: 1667,
    name: "Message Route",
    question:
      "Syrjälä’s network has n computers and m connections. Your task is to find out if Uolevi can send a message to Maija, and if it is possible, what is the minimum number of computers on such a route.",
    tags: "Graph Algorithms",
  },
  {
    id: 1668,
    name: "Building Teams",
    question:
      "There are n pupils in Uolevi’s class, and m friendships between them. Your task is to divide the pupils into two teams in such a way that no two pupils in a team are friends. You can freely choose the sizes of the teams.",
    tags: "Graph Algorithms",
  },
  {
    id: 1669,
    name: "Round Trip",
    question:
      "Byteland has n cities and m roads between them. Your task is to design a round trip that begins in a city, goes through two or more other cities, and finally returns to the starting city. Every intermediate city on the route has to be distinct.",
    tags: "Graph Algorithms",
  },
  {
    id: 1194,
    name: "Monsters",
    question:
      "You and some monsters are in a labyrinth. When taking a step to some direction in the labyrinth, each monster may simultaneously take one as well. Your goal is to reach one of the boundary squares without ever sharing a square with a monster. Your task is to find out if your goal is possible, and if it is, print a path that you can follow. Your plan has to work in any situation; even if the monsters know your path beforehand.",
    tags: "Graph Algorithms",
  },
  {
    id: 1671,
    name: "Shortest Routes I",
    question:
      "There are n cities and m flight connections between them. Your task is to determine the length of the shortest route from Syrjälä to every city.",
    tags: "Graph Algorithms",
  },
  {
    id: 1672,
    name: "Shortest Routes II",
    question:
      "There are n cities and m roads between them. Your task is to process q queries where you have to determine the length of the shortest route between two given cities.",
    tags: "Graph Algorithms",
  },
  {
    id: 1673,
    name: "High Score",
    question:
      "You play a game consisting of n rooms and m tunnels. Your initial score is 0, and each tunnel increases your score by x where x may be both positive or negative. You may go through a tunnel several times. Your task is to walk from room 1 to room n. What is the maximum score you can get?",
    tags: "Graph Algorithms",
  },
  {
    id: 1195,
    name: "Flight Discount",
    question:
      "Your task is to find a minimum-price flight route from Syrjälä to Metsälä. You have one discount coupon, using which you can halve the price of any single flight during the route. However, you can only use the coupon once.",
    tags: "Graph Algorithms",
  },
  {
    id: 1197,
    name: "Cycle Finding",
    question:
      "You are given a directed graph, and your task is to find out if it contains a negative cycle, and also give an example of such a cycle.",
    tags: "Graph Algorithms",
  },
  {
    id: 1196,
    name: "Flight Routes",
    question:
      "Your task is to find the k shortest flight routes from Syrjälä to Metsälä. A route can visit the same city several times. Note that there can be several routes with the same price and each of them should be considered (see the example).",
    tags: "Graph Algorithms",
  },
  {
    id: 1678,
    name: "Round Trip II",
    question:
      "Byteland has n cities and m flight connections. Your task is to design a round trip that begins in a city, goes through one or more other cities, and finally returns to the starting city. Every intermediate city on the route has to be distinct.",
    tags: "Graph Algorithms",
  },
  {
    id: 1679,
    name: "Course Schedule",
    question:
      'You have to complete n courses. There are m requirements of the form "course a has to be completed before course b". Your task is to find an order in which you can complete the courses.',
    tags: "Graph Algorithms",
  },
  {
    id: 1680,
    name: "Longest Flight Route",
    question:
      "Uolevi has won a contest, and the prize is a free flight trip that can consist of one or more flights through cities. Of course, Uolevi wants to choose a trip that has as many cities as possible. Uolevi wants to fly from Syrjälä to Lehmälä so that he visits the maximum number of cities. You are given the list of possible flights, and you know that there are no directed cycles in the flight network.",
    tags: "Graph Algorithms",
  },
  {
    id: 1681,
    name: "Game Routes",
    question:
      "A game has n levels, connected by m teleporters, and your task is to get from level 1 to level n. The game has been designed so that there are no directed cycles in the underlying graph. In how many ways can you complete the game?",
    tags: "Graph Algorithms",
  },
  {
    id: 1202,
    name: "Investigation",
    question:
      "You are going to travel from Syrjälä to Lehmälä by plane. You would like to find answers to the following questions:\n\n- what is the minimum price of such a route?\n- how many minimum-price routes are there? (modulo 10⁹ + 7)\n- what is the minimum number of flights in a minimum-price route?\n- what is the maximum number of flights in a minimum-price route?",
    tags: "Graph Algorithms",
  },
  {
    id: 1750,
    name: "Planets Queries I",
    question:
      "You are playing a game consisting of n planets. Each planet has a teleporter to another planet (or the planet itself). Your task is to process q queries of the form: when you begin on planet x and travel through k teleporters, which planet will you reach?",
    tags: "Graph Algorithms",
  },
  {
    id: 1160,
    name: "Planets Queries II",
    question:
      "You are playing a game consisting of n planets. Each planet has a teleporter to another planet (or the planet itself). You have to process q queries of the form: You are now on planet a and want to reach planet b. What is the minimum number of teleportations?",
    tags: "Graph Algorithms",
  },
  {
    id: 1751,
    name: "Planets Cycles",
    question:
      "You are playing a game consisting of n planets. Each planet has a teleporter to another planet (or the planet itself). You start on a planet and then travel through teleporters until you reach a planet that you have already visited before. Your task is to calculate for each planet the number of teleportations there would be if you started on that planet.",
    tags: "Graph Algorithms",
  },
  {
    id: 1675,
    name: "Road Reparation",
    question:
      "There are n cities and m roads between them. Unfortunately, the condition of the roads is so poor that they cannot be used. Your task is to repair some of the roads so that there will be a decent route between any two cities. For each road, you know its reparation cost, and you should find a solution where the total cost is as small as possible.",
    tags: "Graph Algorithms",
  },
  {
    id: 1676,
    name: "Road Construction",
    question:
      "There are n cities and initially no roads between them. However, every day a new road will be constructed, and there will be a total of m roads. A component is a group of cities where there is a route between any two cities using the roads. After each day, your task is to find the number of components and the size of the largest component.",
    tags: "Graph Algorithms",
  },
  {
    id: 1682,
    name: "Flight Routes Check",
    question:
      "There are n cities and m flight connections. Your task is to check if you can travel from any city to any other city using the available flights.",
    tags: "Graph Algorithms",
  },
  {
    id: 1683,
    name: "Planets and Kingdoms",
    question:
      "A game has n planets, connected by m teleporters. Two planets a and b belong to the same kingdom exactly when there is a route both from a to b and from b to a. Your task is to determine for each planet its kingdom.",
    tags: "Graph Algorithms",
  },
  {
    id: 1684,
    name: "Giant Pizza",
    question:
      'Uolevi’s family is going to order a large pizza and eat it together. A total of n family members will join the order, and there are m possible toppings. The pizza may have any number of toppings. Each family member gives two wishes concerning the toppings of the pizza. The wishes are of the form "topping x is good/bad". Your task is to choose the toppings so that at least one wish from everybody becomes true (a good topping is included in the pizza or a bad topping is not included).',
    tags: "Graph Algorithms",
  },
  {
    id: 1686,
    name: "Coin Collector",
    question:
      "A game has n rooms and m tunnels between them. Each room has a certain number of coins. What is the maximum number of coins you can collect while moving through the tunnels when you can freely choose your starting and ending room?",
    tags: "Graph Algorithms",
  },
  {
    id: 1691,
    name: "Mail Delivery",
    question:
      "Your task is to deliver mail to the inhabitants of a city. For this reason, you want to find a route whose starting and ending point are the post office, and that goes through every street exactly once.",
    tags: "Graph Algorithms",
  },
  {
    id: 1692,
    name: "De Bruijn Sequence",
    question:
      "Your task is to construct a minimum-length bit string that contains all possible substrings of length n. For example, when n = 2, the string 00110 is a valid solution, because its substrings of length 2 are 00, 01, 10 and 11.",
    tags: "Graph Algorithms",
  },
  {
    id: 1693,
    name: "Teleporters Path",
    question:
      "A game has n levels and m teleportes between them. You win the game if you move from level 1 to level n using every teleporter exactly once. Can you win the game, and what is a possible way to do it?",
    tags: "Graph Algorithms",
  },
  {
    id: 1690,
    name: "Hamiltonian Flights",
    question:
      "There are n cities and m flight connections between them. You want to travel from Syrjälä to Lehmälä so that you visit each city exactly once. How many possible routes are there?",
    tags: "Graph Algorithms",
  },
  {
    id: 1689,
    name: "Knight's Tour",
    question:
      "Given a starting position of a knight on an 8 × 8 chessboard, your task is to find a sequence of moves such that it visits every square exactly once. On each move, the knight may either move two steps horizontally and one step vertically, or one step horizontally and two steps vertically.",
    tags: "Graph Algorithms",
  },
  {
    id: 1694,
    name: "Download Speed",
    question:
      "Consider a network consisting of n computers and m connections. Each connection specifies how fast a computer can send data to another computer. Kotivalo wants to download some data from a server. What is the maximum speed he can do this, using the connections in the network?",
    tags: "Graph Algorithms",
  },
  {
    id: 1695,
    name: "Police Chase",
    question:
      "Kaaleppi has just robbed a bank and is now heading to the harbor. However, the police wants to stop him by closing some streets of the city. What is the minimum number of streets that should be closed so that there is no route between the bank and the harbor?",
    tags: "Graph Algorithms",
  },
  {
    id: 1696,
    name: "School Dance",
    question:
      "There are n boys and m girls in a school. Next week a school dance will be organized. A dance pair consists of a boy and a girl, and there are k potential pairs. Your task is to find out the maximum number of dance pairs and show how this number can be achieved.",
    tags: "Graph Algorithms",
  },
  {
    id: 1711,
    name: "Distinct Routes",
    question:
      "A game consists of n rooms and m teleporters. At the beginning of each day, you start in room 1 and you have to reach room n. You can use each teleporter at most once during the game. How many days can you play if you choose your routes optimally?",
    tags: "Graph Algorithms",
  },
  {
    id: 1646,
    name: "Static Range Sum Queries",
    question:
      "Given an array of n integers, your task is to process q queries of the form: what is the sum of values in range [a,b]?",
    tags: "Range Queries",
  },
  {
    id: 1647,
    name: "Static Range Minimum Queries",
    question:
      "Given an array of n integers, your task is to process q queries of the form: what is the minimum value in range [a,b]?",
    tags: "Range Queries",
  },
  {
    id: 1648,
    name: "Dynamic Range Sum Queries",
    question:
      "Given an array of n integers, your task is to process q queries of the following types:\n\n1. update the value at position k to u\n2. what is the sum of values in range [a,b]?",
    tags: "Range Queries",
  },
  {
    id: 1649,
    name: "Dynamic Range Minimum Queries",
    question:
      "Given an array of n integers, your task is to process q queries of the following types:\n\n1. update the value at position k to u\n2. what is the minimum value in range [a,b]?",
    tags: "Range Queries",
  },
  {
    id: 1650,
    name: "Range Xor Queries",
    question:
      "Given an array of n integers, your task is to process q queries of the form: what is the xor sum of values in range [a,b]?",
    tags: "Range Queries",
  },
  {
    id: 1651,
    name: "Range Update Queries",
    question:
      "Given an array of n integers, your task is to process q queries of the following types:\n\n1. increase each value in range [a,b] by u\n2. what is the value at position k?",
    tags: "Range Queries",
  },
  {
    id: 1652,
    name: "Forest Queries",
    question:
      "You are given an n × n grid representing the map of a forest. Each square is either empty or contains a tree. The upper-left square has coordinates (1,1), and the lower-right square has coordinates (n,n). Your task is to process q queries of the form: how many trees are inside a given rectangle in the forest?",
    tags: "Range Queries",
  },
  {
    id: 1143,
    name: "Hotel Queries",
    question:
      "There are n hotels on a street. For each hotel you know the number of free rooms. Your task is to assign hotel rooms for groups of tourists. All members of a group want to stay in the same hotel. The groups will come to you one after another, and you know for each group the number of rooms it requires. You always assign a group to the first hotel having enough rooms. After this, the number of free rooms in the hotel decreases.",
    tags: "Range Queries",
  },
  {
    id: 1749,
    name: "List Removals",
    question:
      "You are given a list consisting of n integers. Your task is to remove elements from the list at given positions, and report the removed elements.",
    tags: "Range Queries",
  },
  {
    id: 1144,
    name: "Salary Queries",
    question:
      "A company has n employees with certain salaries. Your task is to keep track of the salaries and process queries.",
    tags: "Range Queries",
  },
  {
    id: 2166,
    name: "Prefix Sum Queries",
    question:
      "Given an array of n integers, your task is to process q queries of the following types:\n\n1. update the value at position k to u\n2. what is the maximum prefix sum in range [a,b]?",
    tags: "Range Queries",
  },
  {
    id: 2206,
    name: "Pizzeria Queries",
    question:
      "There are n buildings on a street, numbered 1, 2, …, n. Each building has a pizzeria and an apartment. The pizza price in building k is p_(k). If you order a pizza from building a to building b, its price (with delivery) is p_(a) + |a−b|. Your task is to process two types of queries:\n\n1. The pizza price p_(k) in building k becomes x.\n2. You are in building k and want to order a pizza. What is the minimum price?",
    tags: "Range Queries",
  },
  {
    id: 1190,
    name: "Subarray Sum Queries",
    question:
      "There is an array consisting of n integers. Some values of the array will be updated, and after each update, your task is to report the maximum subarray sum in the array.",
    tags: "Range Queries",
  },
  {
    id: 1734,
    name: "Distinct Values Queries",
    question:
      "You are given an array of n integers and q queries of the form: how many distinct values are there in a range [a,b]?",
    tags: "Range Queries",
  },
  {
    id: 2416,
    name: "Increasing Array Queries",
    question:
      "You are given an array that consists of n integers. The array elements are indexed 1, 2, …, n. You can modify the array using the following operation: choose an array element and increase its value by one. Your task is to process q queries of the form: when we consider a subarray from position a to position b, what is the minimum number of operations after which the subarray is increasing? An array is increasing if each element is greater than or equal with the previous element.",
    tags: "Range Queries",
  },
  {
    id: 1739,
    name: "Forest Queries II",
    question:
      "You are given an n × n grid representing the map of a forest. Each square is either empty or has a tree. Your task is to process q queries of the following types:\n\n1. Change the state (empty/tree) of a square.\n2. How many trees are inside a rectangle in the forest?",
    tags: "Range Queries",
  },
  {
    id: 1735,
    name: "Range Updates and Sums",
    question:
      "Your task is to maintain an array of n values and efficiently process the following types of queries:\n\n1. Increase each value in range [a,b] by x.\n2. Set each value in range [a,b] to x.\n3. Calculate the sum of values in range [a,b].",
    tags: "Range Queries",
  },
  {
    id: 1736,
    name: "Polynomial Queries",
    question:
      "Your task is to maintain an array of n values and efficiently process the following types of queries:\n\n1. Increase the first value in range [a,b] by 1, the second value by 2, the third value by 3, and so on.\n2. Calculate the sum of values in range [a,b].",
    tags: "Range Queries",
  },
  {
    id: 1737,
    name: "Range Queries and Copies",
    question:
      "Your task is to maintain a list of arrays which initially has a single array. You have to process the following types of queries:\n\n1. Set the value a in array k to x.\n2. Calculate the sum of values in range [a,b] in array k.\n3. Create a copy of array k and add it to the end of the list.",
    tags: "Range Queries",
  },
  {
    id: 1674,
    name: "Subordinates",
    question:
      "Given the structure of a company, your task is to calculate for each employee the number of their subordinates.",
    tags: "Tree Algorithms",
  },
  {
    id: 1130,
    name: "Tree Matching",
    question:
      "You are given a tree consisting of n nodes. A matching is a set of edges where each node is an endpoint of at most one edge. What is the maximum number of edges in a matching?",
    tags: "Tree Algorithms",
  },
  {
    id: 1131,
    name: "Tree Diameter",
    question:
      "You are given a tree consisting of n nodes. The diameter of a tree is the maximum distance between two nodes. Your task is to determine the diameter of the tree.",
    tags: "Tree Algorithms",
  },
  {
    id: 1132,
    name: "Tree Distances I",
    question:
      "You are given a tree consisting of n nodes. Your task is to determine for each node the maximum distance to another node.",
    tags: "Tree Algorithms",
  },
  {
    id: 1133,
    name: "Tree Distances II",
    question:
      "You are given a tree consisting of n nodes. Your task is to determine for each node the sum of the distances from the node to all other nodes.",
    tags: "Tree Algorithms",
  },
  {
    id: 1687,
    name: "Company Queries I",
    question:
      "A company has n employees, who form a tree hierarchy where each employee has a boss, except for the general director. Your task is to process q queries of the form: who is employee x’s boss k levels higher up in the hierarchy?",
    tags: "Tree Algorithms",
  },
  {
    id: 1688,
    name: "Company Queries II",
    question:
      "A company has n employees, who form a tree hierarchy where each employee has a boss, except for the general director. Your task is to process q queries of the form: who is the lowest common boss of employees a and b in the hierarchy?",
    tags: "Tree Algorithms",
  },
  {
    id: 1135,
    name: "Distance Queries",
    question:
      "You are given a tree consisting of n nodes. Your task is to process q queries of the form: what is the distance between nodes a and b?",
    tags: "Tree Algorithms",
  },
  {
    id: 1136,
    name: "Counting Paths",
    question:
      "You are given a tree consisting of n nodes, and m paths in the tree. Your task is to calculate for each node the number of paths containing that node.",
    tags: "Tree Algorithms",
  },
  {
    id: 1137,
    name: "Subtree Queries",
    question:
      "You are given a rooted tree consisting of n nodes. The nodes are numbered 1, 2, …, n, and node 1 is the root. Each node has a value. Your task is to process following types of queries:\n\n1. change the value of node s to x\n2. calculate the sum of values in the subtree of node s",
    tags: "Tree Algorithms",
  },
  {
    id: 1138,
    name: "Path Queries",
    question:
      "You are given a rooted tree consisting of n nodes. The nodes are numbered 1, 2, …, n, and node 1 is the root. Each node has a value. Your task is to process following types of queries:\n\n1. change the value of node s to x\n2. calculate the sum of values on the path from the root to node s",
    tags: "Tree Algorithms",
  },
  {
    id: 2134,
    name: "Path Queries II",
    question:
      "You are given a tree consisting of n nodes. The nodes are numbered 1, 2, …, n. Each node has a value. Your task is to process following types of queries:\n\n1. change the value of node s to x\n2. find the maximum value on the path between nodes a and b.",
    tags: "Tree Algorithms",
  },
  {
    id: 1139,
    name: "Distinct Colors",
    question:
      "You are given a rooted tree consisting of n nodes. The nodes are numbered 1, 2, …, n, and node 1 is the root. Each node has a color. Your task is to determine for each node the number of distinct colors in the subtree of the node.",
    tags: "Tree Algorithms",
  },
  {
    id: 2079,
    name: "Finding a Centroid",
    question:
      "Given a tree of n nodes, your task is to find a centroid, i.e., a node such that when it is appointed the root of the tree, each subtree has at most ⌊n/2⌋ nodes.",
    tags: "Tree Algorithms",
  },
  {
    id: 2080,
    name: "Fixed-Length Paths I",
    question:
      "Given a tree of n nodes, your task is to count the number of distinct paths that consist of exactly k edges.",
    tags: "Tree Algorithms",
  },
  {
    id: 2081,
    name: "Fixed-Length Paths II",
    question:
      "Given a tree of n nodes, your task is to count the number of distinct paths that have at least k₁ and at most k₂ edges.",
    tags: "Tree Algorithms",
  },
  {
    id: 2164,
    name: "Josephus Queries",
    question:
      'Consider a game where there are n children (numbered 1, 2, …, n) in a circle. During the game, every second child is removed from the circle, until there are no children left. Your task is to process q queries of the form: "when there are n children, who is the kth child that will be removed?"',
    tags: "Mathematics",
  },
  {
    id: 1095,
    name: "Exponentiation",
    question:
      "Your task is to efficiently calculate values a^(b) modulo 10⁹ + 7.",
    tags: "Mathematics",
  },
  {
    id: 1712,
    name: "Exponentiation II",
    question:
      "Your task is to efficiently calculate values a^(b^(c)) modulo 10⁹ + 7.",
    tags: "Mathematics",
  },
  {
    id: 1713,
    name: "Counting Divisors",
    question:
      "Given n integers, your task is to report for each integer the number of its divisors. For example, if x = 18, the correct answer is 6 because its divisors are 1, 2, 3, 6, 9, 18.",
    tags: "Mathematics",
  },
  {
    id: 1081,
    name: "Common Divisors",
    question:
      "You are given an array of n positive integers. Your task is to find two integers such that their greatest common divisor is as large as possible.",
    tags: "Mathematics",
  },
  {
    id: 1082,
    name: "Sum of Divisors",
    question:
      "Let σ(n) denote the sum of divisors of an integer n. For example, σ(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28. Your task is to calculate the sum $\\sum_{i=1}^n \\sigma(i)$ modulo 10⁹ + 7.",
    tags: "Mathematics",
  },
  {
    id: 2182,
    name: "Divisor Analysis",
    question:
      "Given an integer, your task is to find the number, sum and product of its divisors. As an example, let us consider the number 12:\n\n- the number of divisors is 6 (they are 1, 2, 3, 4, 6, 12)\n- the sum of divisors is 1 + 2 + 3 + 4 + 6 + 12 = 28\n- the product of divisors is 1 ⋅ 2 ⋅ 3 ⋅ 4 ⋅ 6 ⋅ 12 = 1728\n\nSince the input number may be large, it is given as a prime factorization.",
    tags: "Mathematics",
  },
  {
    id: 2185,
    name: "Prime Multiples",
    question:
      "You are given k distinct prime numbers a₁, a₂, …, a_(k) and an integer n. Your task is to calculate how many of the first n positive integers are divisible by at least one of the given prime numbers.",
    tags: "Mathematics",
  },
  {
    id: 2417,
    name: "Counting Coprime Pairs",
    question:
      "Given a list of n positive integers, your task is to count the number of pairs of integers that are coprime (i.e., their greatest common divisor is one).",
    tags: "Mathematics",
  },
  {
    id: 1079,
    name: "Binomial Coefficients",
    question:
      "Your task is to calculate n binomial coefficients modulo 10⁹ + 7. A binomial coefficient ${a \\choose b}$ can be calculated using the formula $\\frac{a!}{b!(a-b)!}$. We assume that a and b are integers and 0 ≤ b ≤ a.",
    tags: "Mathematics",
  },
  {
    id: 1715,
    name: "Creating Strings II",
    question:
      "Given a string, your task is to calculate the number of different strings that can be created using its characters.",
    tags: "Mathematics",
  },
  {
    id: 1716,
    name: "Distributing Apples",
    question:
      "There are n children and m apples that will be distributed to them. Your task is to count the number of ways this can be done. For example, if n = 3 and m = 2, there are 6 ways: [0,0,2], [0,1,1], [0,2,0], [1,0,1], [1,1,0] and [2,0,0].",
    tags: "Mathematics",
  },
  {
    id: 1717,
    name: "Christmas Party",
    question:
      "There are n children at a Christmas party, and each of them has brought a gift. The idea is that everybody will get a gift brought by someone else. In how many ways can the gifts be distributed?",
    tags: "Mathematics",
  },
  {
    id: 2064,
    name: "Bracket Sequences I",
    question:
      "Your task is to calculate the number of valid bracket sequences of length n. For example, when n = 6, there are 5 sequences:\n\n-\n()()()\n-\n()(())\n-\n(())()\n-\n((()))\n-\n(()())",
    tags: "Mathematics",
  },
  {
    id: 2187,
    name: "Bracket Sequences II",
    question:
      "Your task is to calculate the number of valid bracket sequences of length n when a prefix of the sequence is given.",
    tags: "Mathematics",
  },
  {
    id: 2209,
    name: "Counting Necklaces",
    question:
      "Your task is to count the number of different necklaces that consist of n pearls and each pearl has m possible colors. Two necklaces are considered to be different if it is not possible to rotate one of them so that they look the same.",
    tags: "Mathematics",
  },
  {
    id: 2210,
    name: "Counting Grids",
    question:
      "Your task is to count the number of different n × n grids whose each square is black or white. Two grids are considered to be different if it is not possible to rotate one of them so that they look the same.",
    tags: "Mathematics",
  },
  {
    id: 1722,
    name: "Fibonacci Numbers",
    question:
      "The Fibonacci numbers can be defined as follows:\n\n- F₀ = 0\n- F₁ = 1\n- F_(n) = F_(n − 2) + F_(n − 1)\n\nYour task is to calculate the value of F_(n) for a given n.",
    tags: "Mathematics",
  },
  {
    id: 1096,
    name: "Throwing Dice",
    question:
      "Your task is to calculate the number of ways to get a sum n by throwing dice. Each throw yields an integer between 1…6. For example, if n = 10, some possible ways are 3 + 3 + 4, 1 + 4 + 1 + 4 and 1 + 1 + 6 + 1 + 1.",
    tags: "Mathematics",
  },
  {
    id: 1723,
    name: "Graph Paths I",
    question:
      "Consider a directed graph that has n nodes and m edges. Your task is to count the number of paths from node 1 to node n with exactly k edges.",
    tags: "Mathematics",
  },
  {
    id: 1724,
    name: "Graph Paths II",
    question:
      "Consider a directed weighted graph having n nodes and m edges. Your task is to calculate the minimum path length from node 1 to node n with exactly k edges.",
    tags: "Mathematics",
  },
  {
    id: 1725,
    name: "Dice Probability",
    question:
      "You throw a dice n times, and every throw produces an outcome between 1 and 6. What is the probability that the sum of outcomes is between a and b?",
    tags: "Mathematics",
  },
  {
    id: 1726,
    name: "Moving Robots",
    question:
      "Each square of an 8 × 8 chessboard has a robot. Each robot independently moves k steps, and there can be many robots on the same square. On each turn, a robot moves one step left, right, up or down, but not outside the board. It randomly chooses a direction among those where it can move. Your task is to calculate the expected number of empty squares after k turns.",
    tags: "Mathematics",
  },
  {
    id: 1727,
    name: "Candy Lottery",
    question:
      "There are n children, and each of them independently gets a random integer number of candies between 1 and k. What is the expected maximum number of candies a child gets?",
    tags: "Mathematics",
  },
  {
    id: 1728,
    name: "Inversion Probability",
    question:
      "An array has n integers x₁, x₂, …, x_(n), and each of them has been randomly chosen between 1 and r_(i). An inversion is a pair (a,b) where a < b and x_(a) > x_(b). What is the expected number of inversions in the array?",
    tags: "Mathematics",
  },
  {
    id: 1729,
    name: "Stick Game",
    question:
      "Consider a game where two players remove sticks from a heap. The players move alternately, and the player who removes the last stick wins the game. A set P = {p₁, p₂, …, p_(k)} determines the allowed moves. For example, if P = {1, 3, 4}, a player may remove 1, 3 or 4 sticks. Your task is find out for each number of sticks 1, 2, …, n if the first player has a winning or losing position.",
    tags: "Mathematics",
  },
  {
    id: 1730,
    name: "Nim Game I",
    question:
      "There are n heaps of sticks and two players who move alternately. On each move, a player chooses a non-empty heap and removes any number of sticks. The player who removes the last stick wins the game. Your task is to find out who wins if both players play optimally.",
    tags: "Mathematics",
  },
  {
    id: 1098,
    name: "Nim Game II",
    question:
      "There are n heaps of sticks and two players who move alternately. On each move, a player chooses a non-empty heap and removes 1, 2, or 3 sticks. The player who removes the last stick wins the game. Your task is to find out who wins if both players play optimally.",
    tags: "Mathematics",
  },
  {
    id: 1099,
    name: "Stair Game",
    question:
      "There is a staircase consisting of n stairs, numbered 1, 2, …, n. Initially, each stair has some number of balls. There are two players who move alternately. On each move, a player chooses a stair k where k ≠ 1 and it has at least one ball. Then, the player moves any number of balls from stair k to stair k − 1. The player who moves last wins the game. Your task is to find out who wins the game when both players play optimally. Note that if there are no possible moves at all, the second player wins.",
    tags: "Mathematics",
  },
  {
    id: 2207,
    name: "Grundy's Game",
    question:
      "There is a heap of n coins and two players who move alternately. On each move, a player chooses a heap and divides into two nonempty heaps that have a different number of coins. The player who makes the last move wins the game. Your task is to find out who wins if both players play optimally.",
    tags: "Mathematics",
  },
  {
    id: 2208,
    name: "Another Game",
    question:
      "There are n heaps of coins and two players who move alternately. On each move, a player selects some of the nonempty heaps and removes one coin from each heap. The player who removes the last coin wins the game. Your task is to find out who wins if both players play optimally.",
    tags: "Mathematics",
  },
  {
    id: 1731,
    name: "Word Combinations",
    question:
      "You are given a string of length n and a dictionary containing k words. In how many ways can you create the string using the words?",
    tags: "String Algorithms",
  },
  {
    id: 1753,
    name: "String Matching",
    question:
      "Given a string and a pattern, your task is to count the number of positions where the pattern occurs in the string.",
    tags: "String Algorithms",
  },
  {
    id: 1732,
    name: "Finding Borders",
    question:
      "A border of a string is a prefix that is also a suffix of the string but not the whole string. For example, the borders of\nabcababcab\nare\nab\nand\nabcab\n. Your task is to find all border lengths of a given string.",
    tags: "String Algorithms",
  },
  {
    id: 1733,
    name: "Finding Periods",
    question:
      "A period of a string is a prefix that can be used to generate the whole string by repeating the prefix. The last repetition may be partial. For example, the periods of\nabcabca\nare\nabc\n,\nabcabc\nand\nabcabca\n. Your task is to find all period lengths of a string.",
    tags: "String Algorithms",
  },
  {
    id: 1110,
    name: "Minimal Rotation",
    question:
      "A rotation of a string can be generated by moving characters one after another from beginning to end. For example, the rotations of\nacab\nare\nacab\n,\ncaba\n,\nabac\n, and\nbaca\n. Your task is to determine the lexicographically minimal rotation of a string.",
    tags: "String Algorithms",
  },
  {
    id: 1111,
    name: "Longest Palindrome",
    question:
      "Given a string, your task is to determine the longest palindromic substring of the string. For example, the longest palindrome in\naybabtu\nis\nbab\n.",
    tags: "String Algorithms",
  },
  {
    id: 1112,
    name: "Required Substring",
    question:
      "Your task is to calculate the number of strings of length n having a given pattern of length m as their substring. All strings consist of characters A–Z.",
    tags: "String Algorithms",
  },
  {
    id: 2420,
    name: "Palindrome Queries",
    question:
      "You are given a string that consists of n characters between a–z. The positions of the string are indexed 1, 2, …, n. Your task is to process m operations of the following types:\n\n1. Change the character at position k to x\n2. Check if the substring from position a to position b is a palindrome",
    tags: "String Algorithms",
  },
  {
    id: 2102,
    name: "Finding Patterns",
    question:
      "Given a string and patterns, check for each pattern if it appears in the string.",
    tags: "String Algorithms",
  },
  {
    id: 2103,
    name: "Counting Patterns",
    question:
      "Given a string and patterns, count for each pattern the number of positions where it appears in the string.",
    tags: "String Algorithms",
  },
  {
    id: 2104,
    name: "Pattern Positions",
    question:
      "Given a string and patterns, find for each pattern the first position (1-indexed) where it appears in the string.",
    tags: "String Algorithms",
  },
  {
    id: 2105,
    name: "Distinct Substrings",
    question:
      "Count the number of distinct substrings that appear in a string.",
    tags: "String Algorithms",
  },
  {
    id: 2106,
    name: "Repeating Substring",
    question:
      "A repeating substring is a substring that occurs in two (or more) locations in the string. Your task is to find the longest repeating substring in a given string.",
    tags: "String Algorithms",
  },
  {
    id: 2107,
    name: "String Functions",
    question:
      "We consider a string of n characters, indexed 1, 2, …, n. Your task is to calculate all values of the following functions:\n\n- z(i) denotes the maximum length of a substring that begins at position i and is a prefix of the string. In addition, z(1) = 0.\n- π(i) denotes the maximum length of a substring that ends at position i, is a prefix of the string, and whose length is at most i − 1.\n\nNote that the function z is used in the Z-algorithm, and the function π is used in the KMP algorithm.",
    tags: "String Algorithms",
  },
  {
    id: 2108,
    name: "Substring Order I",
    question:
      "You are given a string of length n. If all of its distinct substrings are ordered lexicographically, what is the kth smallest of them?",
    tags: "String Algorithms",
  },
  {
    id: 2109,
    name: "Substring Order II",
    question:
      "You are given a string of length n. If all of its substrings (not necessarily distinct) are ordered lexicographically, what is the kth smallest of them?",
    tags: "String Algorithms",
  },
  {
    id: 2110,
    name: "Substring Distribution",
    question:
      "You are given a string of length n. For every integer between 1…n you need to print the number of distinct substrings of that length.",
    tags: "String Algorithms",
  },
  {
    id: 2189,
    name: "Point Location Test",
    question:
      "There is a line that goes through the points p₁ = (x₁,y₁) and p₂ = (x₂,y₂). There is also a point p₃ = (x₃,y₃). Your task is to determine whether p₃ is located on the left or right side of the line or if it touches the line when we are looking from p₁ to p₂.",
    tags: "Geometry",
  },
  {
    id: 2190,
    name: "Line Segment Intersection",
    question:
      "There are two line segments: the first goes through the points (x₁,y₁) and (x₂,y₂), and the second goes through the points (x₃,y₃) and (x₄,y₄). Your task is to determine if the line segments intersect, i.e., they have at least one common point.",
    tags: "Geometry",
  },
  {
    id: 2191,
    name: "Polygon Area",
    question:
      "Your task is to calculate the area of a given polygon. The polygon consists of n vertices (x₁,y₁), (x₂,y₂), …, (x_(n),y_(n)). The vertices (x_(i),y_(i)) and (x_(i + 1),y_(i + 1)) are adjacent for i = 1, 2, …, n − 1, and the vertices (x₁,y₁) and (x_(n),y_(n)) are also adjacent.",
    tags: "Geometry",
  },
  {
    id: 2192,
    name: "Point in Polygon",
    question:
      "You are given a polygon of n vertices and a list of m points. Your task is to determine for each point if it is inside, outside or on the boundary of the polygon. The polygon consists of n vertices (x₁,y₁), (x₂,y₂), …, (x_(n),y_(n)). The vertices (x_(i),y_(i)) and (x_(i + 1),y_(i + 1)) are adjacent for i = 1, 2, …, n − 1, and the vertices (x₁,y₁) and (x_(n),y_(n)) are also adjacent.",
    tags: "Geometry",
  },
  {
    id: 2193,
    name: "Polygon Lattice Points",
    question:
      "Given a polygon, your task is to calculate the number of lattice points inside the polygon and on its boundary. A lattice point is a point whose coordinates are integers. The polygon consists of n vertices (x₁,y₁), (x₂,y₂), …, (x_(n),y_(n)). The vertices (x_(i),y_(i)) and (x_(i + 1),y_(i + 1)) are adjacent for i = 1, 2, …, n − 1, and the vertices (x₁,y₁) and (x_(n),y_(n)) are also adjacent.",
    tags: "Geometry",
  },
  {
    id: 2194,
    name: "Minimum Euclidean Distance",
    question:
      "Given a set of points in the two-dimensional plane, your task is to find the minimum Euclidean distance between two distinct points. The Euclidean distance of points (x₁,y₁) and (x₂,y₂) is $\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$.",
    tags: "Geometry",
  },
  {
    id: 2195,
    name: "Convex Hull",
    question:
      "Given a set of n points in the two-dimensional plane, your task is to determine the convex hull of the points.",
    tags: "Geometry",
  },
  {
    id: 1628,
    name: "Meet in the Middle",
    question:
      "You are given an array of n numbers. In how many ways can you choose a subset of the numbers with sum x?",
    tags: "Advanced Techniques",
  },
  {
    id: 2136,
    name: "Hamming Distance",
    question:
      "The Hamming distance between two strings a and b of equal length is the number of positions where the strings differ. You are given n bit strings, each of length k and your task is to calculate the minimum Hamming distance between two strings.",
    tags: "Advanced Techniques",
  },
  {
    id: 2137,
    name: "Beautiful Subgrids",
    question:
      "You are given an n × n grid whose each square is either black or white. A subgrid is called beautiful if its height and width is at least two and all of its corners are black. How many beautiful subgrids are there within the given grid?",
    tags: "Advanced Techniques",
  },
  {
    id: 2138,
    name: "Reachable Nodes",
    question:
      "A directed acyclic graph consists of n nodes and m edges. The nodes are numbered 1, 2, …, n. Calculate for each node the number of nodes you can reach from that node (including the node itself).",
    tags: "Advanced Techniques",
  },
  {
    id: 2143,
    name: "Reachability Queries",
    question:
      'A directed graph consists of n nodes and m edges. The edges are numbered 1, 2, …, n. Your task is to answer q queries of the form "can you reach node b from node a?"',
    tags: "Advanced Techniques",
  },
  {
    id: 2072,
    name: "Cut and Paste",
    question:
      "Given a string, your task is to process operations where you cut a substring and paste it to the end of the string. What is the final string after all the operations?",
    tags: "Advanced Techniques",
  },
  {
    id: 2073,
    name: "Substring Reversals",
    question:
      "Given a string, your task is to process operations where you reverse a substring of the string. What is the final string after all the operations?",
    tags: "Advanced Techniques",
  },
  {
    id: 2074,
    name: "Reversals and Sums",
    question:
      "Given an array of n integers, you have to process following operations:\n\n1. reverse a subarray\n2. calculate the sum of values in a subarray",
    tags: "Advanced Techniques",
  },
  {
    id: 2076,
    name: "Necessary Roads",
    question:
      "There are n cities and m roads between them. There is a route between any two cities. A road is called necessary if there is no route between some two cities after removing that road. Your task is to find all necessary roads.",
    tags: "Advanced Techniques",
  },
  {
    id: 2077,
    name: "Necessary Cities",
    question:
      "There are n cities and m roads between them. There is a route between any two cities. A city is called necessary if there is no route between some other two cities after removing that city (and adjacent roads). Your task is to find all necessary cities.",
    tags: "Advanced Techniques",
  },
  {
    id: 2078,
    name: "Eulerian Subgraphs",
    question:
      "You are given an undirected graph that has n nodes and m edges. We consider subgraphs that have all nodes of the original graph and some of its edges. A subgraph is called Eulerian if each node has even degree. Your task is to count the number of Eulerian subgraphs modulo 10⁹ + 7.",
    tags: "Advanced Techniques",
  },
  {
    id: 2084,
    name: "Monster Game I",
    question:
      "You are playing a game that consists of n levels. Each level has a monster. On levels 1, 2, …, n − 1, you can either kill or escape the monster. However, on level n you must kill the final monster to win the game. Killing a monster takes sf time where s is the monster’s strength and f is your skill factor (lower skill factor is better). After killing a monster, you get a new skill factor. What is the minimum total time in which you can win the game?",
    tags: "Advanced Techniques",
  },
  {
    id: 2085,
    name: "Monster Game II",
    question:
      "You are playing a game that consists of n levels. Each level has a monster. On levels 1, 2, …, n − 1, you can either kill or escape the monster. However, on level n you must kill the final monster to win the game. Killing a monster takes sf time where s is the monster’s strength and f is your skill factor. After killing a monster, you get a new skill factor (lower skill factor is better). What is the minimum total time in which you can win the game?",
    tags: "Advanced Techniques",
  },
  {
    id: 2086,
    name: "Subarray Squares",
    question:
      "Given an array of n elements, your task is to divide into k subarrays. The cost of each subarray is the square of the sum of the values in the subarray. What is the minimum total cost if you act optimally?",
    tags: "Advanced Techniques",
  },
  {
    id: 2087,
    name: "Houses and Schools",
    question:
      "There are n houses on a street, numbered 1, 2, …, n. The distance of houses a and b is |a−b|. You know the number of children in each house. Your task is to establish k schools in such a way that each school is in some house. Then, each child goes to the nearest school. What is the minimum total walking distance of the children if you act optimally?",
    tags: "Advanced Techniques",
  },
  {
    id: 2088,
    name: "Knuth Division",
    question:
      "Given an array of n numbers, your task is to divide it into n subarrays, each of which has a single element. On each move, you may choose any subarray and split it into two subarrays. The cost of such a move is the sum of values in the chosen subarray. What is the minimum total cost if you act optimally?",
    tags: "Advanced Techniques",
  },
  {
    id: 2111,
    name: "Apples and Bananas",
    question:
      "There are apples and bananas and each of them has an integer weight between 1…k. Your task is to calculate for each weight w between 2...2k the number of ways we can choose an apple and a banana whose combined weight is w.",
    tags: "Advanced Techniques",
  },
  {
    id: 2112,
    name: "One Bit Positions",
    question:
      "You are given a binary string of length n and your task is to calculate for every k between 1…n − 1 the number of ways we can choose two positions i and j such that i − j = k and there is a one-bit at both positions.",
    tags: "Advanced Techniques",
  },
  {
    id: 2113,
    name: "Signal Processing",
    question:
      "You are given two integer sequences: a signal and a mask. Your task is to process the signal by moving the mask through the signal from left to right. At each mask position calculate the sum of products of aligned signal and mask values in the part where the signal and the mask overlap.",
    tags: "Advanced Techniques",
  },
  {
    id: 2101,
    name: "New Roads Queries",
    question:
      'There are n cities in Byteland but no roads between them. However, each day, a new road will be built. There will be a total of m roads. Your task is to process q queries of the form: "after how many days can we travel from city a to city b for the first time?"',
    tags: "Advanced Techniques",
  },
  {
    id: 2133,
    name: "Dynamic Connectivity",
    question:
      "Consider an undirected graph that consists of n nodes and m edges. There are two types of events that can happen:\n\n1. A new edge is created between nodes a and b.\n2. An existing edge between nodes a and b is removed.\n\nYour task is to report the number of components after every event.",
    tags: "Advanced Techniques",
  },
  {
    id: 2121,
    name: "Parcel Delivery",
    question:
      "There are n cities and m routes through which parcels can be carried from one city to another city. For each route, you know the maximum number of parcels and the cost of a single parcel. You want to send k parcels from Syrjälä to Lehmälä. What is the cheapest way to do that?",
    tags: "Advanced Techniques",
  },
  {
    id: 2129,
    name: "Task Assignment",
    question:
      "A company has n employees and there are n tasks that need to be done. We know for each employee the cost of carrying out each task. Every employee should be assigned to exactly one task. What is the minimum total cost if we assign the tasks optimally and how could they be assigned?",
    tags: "Advanced Techniques",
  },
  {
    id: 2130,
    name: "Distinct Routes II",
    question:
      "A game consists of n rooms and m teleporters. At the beginning of each day, you start in room 1 and you have to reach room n. You can use each teleporter at most once during the game. You want to play the game for exactly k days. Every time you use any teleporter you have to pay one coin. What is the minimum number of coins you have to pay during k days if you play optimally?",
    tags: "Advanced Techniques",
  },
  {
    id: 1087,
    name: "Shortest Subsequence",
    question:
      "You are given a DNA sequence consisting of characters A, C, G, and T. Your task is to find the shortest DNA sequence that is not a subsequence of the original sequence.",
    tags: "Additional Problems",
  },
  {
    id: 1146,
    name: "Counting Bits",
    question:
      "Your task is to count the number of one bits in the binary representations of integers between 1 and n.",
    tags: "Additional Problems",
  },
  {
    id: 1670,
    name: "Swap Game",
    question:
      "You are given a 3 × 3 grid containing the numbers 1, 2, …, 9. Your task is to perform a sequence of moves so that the grid will look like this:\n1 2 3\n4 5 6\n7 8 9\nOn each move, you can swap the numbers in any two adjacent squares (horizontally or vertically). What is the minimum number of moves required?",
    tags: "Additional Problems",
  },
  {
    id: 1134,
    name: "Prüfer Code",
    question:
      "A Prüfer code of a tree of n nodes is a sequence of n − 2 integers that uniquely specifies the structure of the tree. The code is constructed as follows: As long as there are at least three nodes left, find a leaf with the smallest label, add the label of its only neighbor to the code, and remove the leaf from the tree. Given a Prüfer code of a tree, your task is to construct the original tree.",
    tags: "Additional Problems",
  },
  {
    id: 1756,
    name: "Acyclic Graph Edges",
    question:
      "Given an undirected graph, your task is to choose a direction for each edge so that the resulting directed graph is acyclic.",
    tags: "Additional Problems",
  },
  {
    id: 2177,
    name: "Strongly Connected Edges",
    question:
      "Given an undirected graph, your task is to choose a direction for each edge so that the resulting directed graph is strongly connected.",
    tags: "Additional Problems",
  },
  {
    id: 2179,
    name: "Even Outdegree Edges",
    question:
      "Given an undirected graph, your task is to choose a direction for each edge so that in the resulting directed graph each node has an even outdegree. The outdegree of a node is the number of edges coming out of that node.",
    tags: "Additional Problems",
  },
  {
    id: 2422,
    name: "Multiplication Table",
    question:
      "Find the middle element when the numbers in an n × n multiplication table are sorted in increasing order. It is assumed that n is odd. For example, the 3 × 3 multiplication table is as follows:\n$$\\begin{matrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\\\ \\end{matrix}$$\nThe numbers in increasing order are [1,2,2,3,3,4,6,6,9], so the answer is 3.",
    tags: "Additional Problems",
  },
  {
    id: 1142,
    name: "Advertisement",
    question:
      "A fence consists of n vertical boards. The width of each board is 1 and their heights may vary. You want to attach a rectangular advertisement to the fence. What is the maximum area of such an advertisement?",
    tags: "Additional Problems",
  },
  {
    id: 2186,
    name: "Special Substrings",
    question:
      "A substring is called special if every character that appears in the string appears the same number of times in the substring. Your task is to count the number of special substrings in a given string.",
    tags: "Additional Problems",
  },
  {
    id: 2229,
    name: "Permutation Inversions",
    question:
      "Your task is to count the number of permutations of 1, 2, …, n that have exactly k inversions (i.e., pairs of elements in the wrong order). For example, when n = 4 and k = 3, there are 6 such permutations:\n\n- [1,4,3,2]\n- [2,3,4,1]\n- [2,4,1,3]\n- [3,1,4,2]\n- [3,2,1,4]\n- [4,1,2,3]",
    tags: "Additional Problems",
  },
  {
    id: 1655,
    name: "Maximum Xor Subarray",
    question:
      "Given an array of n integers, your task is to find the maximum xor sum in a subarray.",
    tags: "Additional Problems",
  },
  {
    id: 1664,
    name: "Movie Festival Queries",
    question:
      "In a movie festival, n movies will be shown. You know the starting and ending time of each movie. Your task is to process q queries of the form: if you arrive and leave the festival at specific times, what is the maximum number of movies you can watch? You can watch two movies if the first movie ends before or exactly when the second movie starts. You can start the first movie exactly when you arrive and leave exactly when the last movie ends.",
    tags: "Additional Problems",
  },
  {
    id: 1697,
    name: "Chess Tournament",
    question:
      "There will be a chess tournament of n players. Each player has announced the number of games they want to play. Each pair of players can play at most one game. Your task is to determine which games will be played so that everybody will be happy.",
    tags: "Additional Problems",
  },
  {
    id: 1702,
    name: "Tree Traversals",
    question:
      "There are three common ways to traverse the nodes of a binary tree:\n\n- Preorder: First process the root, then the left subtree, and finally the right subtree.\n- Inorder: First process the left subtree, then the root, and finally the right subtree.\n- Postorder: First process the left subtree, then the right subtree, and finally the root.\n\nThere is a binary tree of n nodes with distinct labels. You are given the preorder and inorder traversals of the tree, and your task is to determine its postorder traversal.",
    tags: "Additional Problems",
  },
  {
    id: 1704,
    name: "Network Renovation",
    question:
      "Syrjälä’s network consists of n computers and n − 1 connections between them. It is possible to send data between any two computers. However, if any connection breaks down, it will no longer be possible to send data between some computers. Your task is to add the minimum number of new connections in such a way that you can still send data between any two computers even if any single connection breaks down.",
    tags: "Additional Problems",
  },
  {
    id: 1707,
    name: "Graph Girth",
    question:
      "Given an undirected graph, your task is to determine its girth, i.e., the length of its shortest cycle.",
    tags: "Additional Problems",
  },
  {
    id: 1740,
    name: "Intersection Points",
    question:
      "Given n horizontal and vertical line segments, your task is to calculate the number of their intersection points. You can assume that no parallel line segments intersect, and no endpoint of a line segment is an intersection point.",
    tags: "Additional Problems",
  },
  {
    id: 2214,
    name: "Inverse Inversions",
    question:
      "Your task is to create a permutation of numbers 1, 2, …, n that has exactly k inversions. An inversion is a pair (a,b) where a < b and p_(a) > p_(b) where p_(i) denotes the number at position i in the permutation.",
    tags: "Additional Problems",
  },
  {
    id: 2215,
    name: "Monotone Subsequences",
    question:
      "Your task is to create a permutation of numbers 1, 2, …, n whose longest monotone subsequence has exactly k elements. A monotone subsequence is either increasing or decreasing. For example, some monotone subsequences in [2,1,4,5,3] are [2,4,5] and [4,3].",
    tags: "Additional Problems",
  },
  {
    id: 1743,
    name: "String Reorder",
    question:
      "Given a string, you want to reorder its characters so that no two adjacent characters are the same. What is the lexicographically minimal such string?",
    tags: "Additional Problems",
  },
  {
    id: 2425,
    name: "Stack Weights",
    question:
      "You have n coins, each of which has a distinct weight. There are two stacks which are initially empty. On each step you move one coin to a stack. You never remove a coin from a stack. After each move, your task is to determine which stack is heavier (if we can be sure that either stack is heavier).",
    tags: "Additional Problems",
  },
  {
    id: 1747,
    name: "Pyramid Array",
    question:
      "You are given an array consisting of n distinct integers. On each move, you can swap any two adjacent values. You want to transform the array into a pyramid array. This means that the final array has to be first increasing and then decreasing. It is also allowed that the final array is only increasing or decreasing. What is the minimum number of moves needed?",
    tags: "Additional Problems",
  },
  {
    id: 1748,
    name: "Increasing Subsequence II",
    question:
      "Given an array of n integers, your task is to calculate the number of increasing subsequences it contains. If two subsequences have the same values but in different positions in the array, they are counted separately.",
    tags: "Additional Problems",
  },
  {
    id: 1149,
    name: "String Removals",
    question:
      "You are given a string. You can remove any number of characters from it, but you cannot change the order of the remaining characters. How many different strings can you generate?",
    tags: "Additional Problems",
  },
  {
    id: 1188,
    name: "Bit Inversions",
    question:
      "There is a bit string consisting of n bits. Then, there are some changes that invert one given bit. Your task is to report, after each change, the length of the longest substring whose each bit is the same.",
    tags: "Additional Problems",
  },
  {
    id: 2419,
    name: "Xor Pyramid",
    question:
      "Consider a xor pyramid where each number is the xor of lower-left and lower-right numbers. Here is an example pyramid: Given the bottom row of the pyramid, your task is to find the topmost number.",
    tags: "Additional Problems",
  },
  {
    id: 1086,
    name: "Writing Numbers",
    question:
      "You would like to write a list of positive integers 1, 2, 3, … using your computer. However, you can press each key 0–9 at most n times during the process. What is the last number you can write?",
    tags: "Additional Problems",
  },
  {
    id: 1113,
    name: "String Transform",
    question:
      "Consider the following string transformation:\n\n1. append the character # to the string (we assume that # is lexicographically smaller than all other characters of the string)\n2. generate all rotations of the string\n3. sort the rotations in increasing order\n4. based on this order, construct a new string that contains the last character of each rotation\n\nFor example, the string\nbabc\nbecomes\nbabc#\n. Then, the sorted list of rotations is\n#babc\n,\nabc#b\n,\nbabc#\n,\nbc#ba\n, and\nc#bab\n. This yields a string\ncb#ab\n.",
    tags: "Additional Problems",
  },
  {
    id: 2427,
    name: "Letter Pair Move Game",
    question:
      'There are 2n boxes in a line. Two adjacent boxes are empty, and all other boxes have a letter "A" or "B". Both letters appear in exactly n − 1 boxes. Your task is to move the letters so that all letters "A" appear before any letter "B". On each turn you can choose any two adjacent boxes that have a letter and move the letters to the two adjacent empty boxes, preserving their order. It can be proven that either there is a solution that consists of at most 10n turns or there are no solutions.',
    tags: "Additional Problems",
  },
  {
    id: 1147,
    name: "Maximum Building I",
    question:
      "You are given a map of a forest where some squares are empty and some squares have trees. What is the maximum area of a rectangular building that can be placed in the forest so that no trees must be cut down?",
    tags: "Additional Problems",
  },
  {
    id: 1162,
    name: "Sorting Methods",
    question:
      "Here are some possible methods using which we can sort the elements of an array in increasing order:\n\n1. At each step, choose two adjacent elements and swap them.\n2. At each step, choose any two elements and swap them.\n3. At each step, choose any element and move it to another position.\n4. At each step, choose any element and move it to the front of the array.\n\nGiven a permutation of numbers 1, 2, …, n, calculate the minimum number of steps to sort the array using the above methods.",
    tags: "Additional Problems",
  },
  {
    id: 1191,
    name: "Cyclic Array",
    question:
      "You are given a cyclic array consisting of n values. Each element has two neighbors; the elements at positions n and 1 are also considered neighbors. Your task is to divide the array into subarrays so that the sum of each subarray is at most k. What is the minimum number of subarrays?",
    tags: "Additional Problems",
  },
  {
    id: 2414,
    name: "List of Sums",
    question:
      "List A consists of n positive integers, and list B contains the sum of each element pair of list A. For example, if A = [1,2,3], then B = [3,4,5], and if A = [1,3,3,3], then B = [4,4,4,6,6,6]. Given list B, your task is to reconstruct list A.",
    tags: "Additional Problems",
  },
  {
    id: 2132,
    name: "Increasing Array II",
    question:
      "You are given an array of n integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element. On each move, you can increase or decrease the value of any element by one. What is the minimum number of moves required?",
    tags: "Additional Problems",
  },
  {
    id: 1189,
    name: "Food Division",
    question:
      "There are n children around a round table. For each child, you know the amount of food they currently have and the amount of food they want. The total amount of food in the table is correct. At each step, a child can give one unit of food to his or her neighbour. What is the minimum number of steps needed?",
    tags: "Additional Problems",
  },
  {
    id: 1654,
    name: "Bit Problem",
    question:
      "Given a list of n integers, your task is to calculate for each element x:\n\n1. the number of elements y such that x ∣ y = x\n2. the number of elements y such that x & y = x\n3. the number of elements y such that x & y ≠ 0",
    tags: "Additional Problems",
  },
  {
    id: 1698,
    name: "Swap Round Sorting",
    question:
      "You are given an array containing a permutation of numbers 1, 2, …, n, and your task is to sort the array using swap rounds. On each swap round, you can choose any number of distinct pairs of elements and swap each pair. Your task is to find the minimum number of rounds and show how you can choose the pairs in each round.",
    tags: "Additional Problems",
  },
  {
    id: 2430,
    name: "Binary Subsequences",
    question:
      "Your task is to find a minimum length bit string that has exactly n distinct subsequences. For example, a correct solution for n = 6 is\n101\nwhose distinct subsequences are\n0\n,\n1\n,\n01\n,\n10\n,\n11\nand\n101\n.",
    tags: "Additional Problems",
  },
  {
    id: 1700,
    name: "Tree Isomorphism I",
    question:
      "Given two rooted trees, your task is to find out if they are isomorphic, i.e., it is possible to draw them so that they look the same.",
    tags: "Additional Problems",
  },
  {
    id: 2228,
    name: "Counting Sequences",
    question:
      "Your task is to count the number of sequences of length n where each element is an integer between 1…k and each integer between 1…k appears at least once in the sequence. For example, when n = 6 and k = 4, some valid sequences are [1,3,1,4,3,2] and [2,2,1,3,4,2].",
    tags: "Additional Problems",
  },
  {
    id: 1703,
    name: "Critical Cities",
    question:
      "There are n cities and m flight connections between them. A city is called a critical city if it appears on every route from a city to another city. Your task is to find all critical cities from Syrjälä to Lehmälä.",
    tags: "Additional Problems",
  },
  {
    id: 1706,
    name: "School Excursion",
    question:
      "A group of n children are coming to Helsinki. There are two possible attractions: a child can visit either Korkeasaari (zoo) or Linnanmäki (amusement park). There are m pairs of children who want to visit the same attraction. Your task is to find all possible alternatives for the number of children that will visit Korkeasaari. The children’s wishes have to be taken into account.",
    tags: "Additional Problems",
  },
  {
    id: 1709,
    name: "Coin Grid",
    question:
      "There is an n × n grid whose each square is empty or has a coin. On each move, you can remove all coins in a row or column. What is the minimum number of moves after which the grid is empty?",
    tags: "Additional Problems",
  },
  {
    id: 1742,
    name: "Robot Path",
    question:
      "You are given a description of a robot’s path. The robot begins at point (0,0) and performs n commands. Each command moves the robot some distance up, down, left or right. The robot will stop when it has performed all commands, or immediately when it returns to a point that it has already visited. Your task is to calculate the total distance the robot moves.",
    tags: "Additional Problems",
  },
  {
    id: 2426,
    name: "Programmers and Artists",
    question:
      "A company wants to hire a programmers and b artists. There are a total of n applicants, and each applicant can become either a programmer or an artist. You know each applicant’s programming and artistic skills. Your task is to select the new employees so that the sum of their skills is maximum.",
    tags: "Additional Problems",
  },
  {
    id: 1757,
    name: "Course Schedule II",
    question:
      'You want to complete n courses that have requirements of the form "course a has to be completed before course b". You want to complete course 1 as soon as possible. If there are several ways to do this, you want then to complete course 2 as soon as possible, and so on. Your task is to determine the order in which you complete the courses.',
    tags: "Additional Problems",
  },
  {
    id: 2174,
    name: "Removing Digits II",
    question:
      "You are given an integer n. On each step, you may substract from it any one-digit number that appears in it. How many steps are required to make the number equal to 0?",
    tags: "Additional Problems",
  },
  {
    id: 2180,
    name: "Coin Arrangement",
    question:
      "There is a 2 × n grid whose each cell contains some number of coins. The total number of coins is 2n. Your task is to arrange the coins so that each cell contains exactly one coin. On each move you can choose any coin and move it one step left, right, up or down. What is the minimum number of moves if you act optimally?",
    tags: "Additional Problems",
  },
  {
    id: 2176,
    name: "Counting Bishops",
    question:
      "Your task is to count the number of ways k bishops can be placed on an n × n chessboard so that no two bishops attack each other. Two bishops attack each other if they are on the same diagonal.",
    tags: "Additional Problems",
  },
  {
    id: 2432,
    name: "Grid Puzzle I",
    question:
      "There is an n × n grid, and your task is to choose from each row and column some number of squares. How can you do that?",
    tags: "Additional Problems",
  },
  {
    id: 2131,
    name: "Grid Puzzle II",
    question:
      "There is an n × n grid whose each square has some number of coins in it. You know for each row and column how many squares you must choose from that row or column. You get all coins from every square you choose. What is the maximum number of coins you can collect and how could you choose the squares so that the given conditions are satisfied?",
    tags: "Additional Problems",
  },
  {
    id: 1080,
    name: "Empty String",
    question:
      "You are given a string consisting of n characters between a and z. On each turn, you may remove any two adjacent characters that are equal. Your goal is to construct an empty string by removing all the characters. In how many ways can you do this?",
    tags: "Additional Problems",
  },
  {
    id: 1078,
    name: "Grid Paths",
    question:
      "Consider an n × n grid whose top-left square is (1,1) and bottom-right square is (n,n). Your task is to move from the top-left square to the bottom-right square. On each step you may move one square right or down. In addition, there are m traps in the grid. You cannot move to a square with a trap. What is the total number of possible paths?",
    tags: "Additional Problems",
  },
  {
    id: 2115,
    name: "Bit Substrings",
    question:
      "You are given a bit string of length n. Your task is to calculate for each k between 0…n the number of non-empty substrings that contain exactly k ones. For example, if the string is 101, there are:\n\n- 1 substring that contains 0 ones: 0\n- 4 substrings that contain 1 one: 01, 1, 1, 10\n- 1 substring that contains 2 ones: 101\n- 0 substrings that contain 3 ones",
    tags: "Additional Problems",
  },
  {
    id: 2075,
    name: "Reversal Sorting",
    question:
      "You have an array that contains a permutation of integers 1, 2, …, n. Your task is to sort the array in increasing order by reversing subarrays. You can construct any solution that has at most n reversals.",
    tags: "Additional Problems",
  },
  {
    id: 2421,
    name: "Counting Reorders",
    question:
      "Calculate the number of ways you can reorder the characters of a string so that no two adjacent characters are the same. For example, the answer for\naabc\nis 6, because the possible orders are\nabac\n,\nabca\n,\nacab\n,\nacba\n,\nbaca\n, and\ncaba\n.",
    tags: "Additional Problems",
  },
  {
    id: 1159,
    name: "Book Shop II",
    question:
      "You are in a book shop which sells n different books. You know the price, the number of pages and the number of copies of each book. You have decided that the total price of your purchases will be at most x. What is the maximum number of pages you can buy? You can buy several copies of the same book.",
    tags: "Additional Problems",
  },
  {
    id: 1677,
    name: "Network Breakdown",
    question:
      "Syrjälä’s network has n computers and m connections between them. The network consists of components of computers that can send messages to each other. Nobody in Syrjälä understands how the network works. For this reason, if a connection breaks down, nobody will repair it. In this situation a component may be divided into two components. Your task is to calculate the number of components after each connection breakdown.",
    tags: "Additional Problems",
  },
  {
    id: 1203,
    name: "Visiting Cities",
    question:
      "You want to travel from Syrjälä to Lehmälä by plane using a minimum-price route. Which cities will you certainly visit?",
    tags: "Additional Problems",
  },
  {
    id: 2184,
    name: "Missing Coin Sum Queries",
    question:
      'You have n coins with positive integer values. The coins are numbered 1, 2, …, n. Your task is to process q queries of the form: "if you can use coins a…b, what is the smallest sum you cannot produce?"',
    tags: "Additional Problems",
  },
  {
    id: 1157,
    name: "Number Grid",
    question:
      "Consider a two-dimensional grid whose rows and columns are 1-indexed. Each square contains the smallest nonnegative integer that does not appear to the left on the same row or above on the same column. Your task is to calculate the value at square (y,x).",
    tags: "Additional Problems",
  },
  {
    id: 1148,
    name: "Maximum Building II",
    question:
      "You are given a map of a forest where some squares are empty and some squares have trees. You want to place a rectangular building in the forest so that no trees need to be cut down. For each building size, your task is to calculate the number of ways you can do this.",
    tags: "Additional Problems",
  },
  {
    id: 2423,
    name: "Filling Trominos",
    question:
      "Your task is to fill an n × m grid using L-trominos (three squares that have an L-shape). For example, here is one way to fill a 4 × 6 grid:",
    tags: "Additional Problems",
  },
  {
    id: 1161,
    name: "Stick Divisions",
    question:
      "You have a stick of length x and you want to divide it into n sticks, with given lengths, whose total length is x. On each move you can take any stick and divide it into two sticks. The cost of such an operation is the length of the original stick. What is the minimum cost needed to create the sticks?",
    tags: "Additional Problems",
  },
  {
    id: 1665,
    name: "Coding Company",
    question:
      "Your company has n coders, and each of them has a skill level between 0 and 100. Your task is to divide the coders into teams that work together. Based on your experience, you know that teams work well when the skill levels of the coders are about the same. For this reason, the penalty for creating a team is the skill level difference between the best and the worst coder. In how many ways can you divide the coders into teams such that the sum of the penalties is at most x?",
    tags: "Additional Problems",
  },
  {
    id: 1699,
    name: "Flight Route Requests",
    question:
      "There are n cities with airports but no flight connections. You are given m requests which routes should be possible to travel. Your task is to determine the minimum number of one-way flight connections which makes it possible to fulfil all requests.",
    tags: "Additional Problems",
  },
  {
    id: 2402,
    name: "Two Stacks Sorting",
    question:
      "You are given an input list that consists of n numbers. Each integer between 1 and n appears exactly once in the list. Your task is to create a sorted output list using two stacks. On each move you can do one of the following:\n\n- Move the first number from the input list to a stack\n- Move a number from a stack to the end of the output list",
    tags: "Additional Problems",
  },
  {
    id: 1701,
    name: "Tree Isomorphism II",
    question:
      "Given two (not rooted) trees, your task is to find out if they are isomorphic, i.e., it is possible to draw them so that they look the same.",
    tags: "Additional Problems",
  },
  {
    id: 1705,
    name: "Forbidden Cities",
    question:
      "There are n cities and m roads between them. Kaaleppi is currently in city a and wants to travel to city b. However, there is a problem: Kaaleppi has recently robbed a bank in city c and can’t enter the city, because the local police would catch him. Your task is to find out if there is a route from city a to city b that does not visit city c. As an additional challenge, you have to process q queries where a, b and c vary.",
    tags: "Additional Problems",
  },
  {
    id: 1741,
    name: "Area of Rectangles",
    question:
      "Given n rectangles, your task is to determine the total area of their union.",
    tags: "Additional Problems",
  },
  {
    id: 2429,
    name: "Grid Completion",
    question:
      "Your task is to create an n × n grid whose each row and column has exactly one A and B. Some of the characters have already been placed. In how many ways can you complete the grid?",
    tags: "Additional Problems",
  },
  {
    id: 1752,
    name: "Creating Offices",
    question:
      "There are n cities and n − 1 roads between them. There is a unique route between any two cities, and their distance is the number of roads on that route. A company wants to have offices in some cities, but the distance between any two offices has to be at least d. What is the maximum number of offices they can have?",
    tags: "Additional Problems",
  },
  {
    id: 1075,
    name: "Permutations II",
    question:
      "A permutation of integers 1, 2, …, n is called beautiful if there are no adjacent elements whose difference is 1. Given n, your task is to count the number of beautiful permutations.",
    tags: "Additional Problems",
  },
  {
    id: 2415,
    name: "Functional Graph Distribution",
    question:
      "A functional graph is a directed graph where each node has outdegree 1. For example, here is a functional graph that has 9 nodes and 2 components: Given n, your task is to calculate for each k = 1…n the number of functional graphs that have n nodes and k components.",
    tags: "Additional Problems",
  },
  {
    id: 1685,
    name: "New Flight Routes",
    question:
      "There are n cities and m flight connections between them. Your task is to add new flights so that it will be possible to travel from any city to any other city. What is the minimum number of new flights required?",
    tags: "Additional Problems",
  },
  {
    id: 2418,
    name: "Grid Path Construction",
    question:
      "Given an n × m grid and two squares a = (y₁,x₁) and b = (y₂,x₂), create a path from a to b that visits each square exactly once. For example, here is a path from a = (1,3) to b = (3,6) in a 4 × 7 grid:",
    tags: "Additional Problems",
  },
];

// const solutions: Record<number, string> = {
//   1068: `#include <bits/stdc++.h>
// using namespace std;
// int main() {
//     long long n;
//     cin >> n;
//     while (n != 1) {
//         cout << n << " ";
//         if (n % 2 == 0) {
//             n /= 2;
//         } else {
//             n = 3 * n + 1;
//         }
//     }
//     cout << 1;
// }`,
//   1083: `#include <bits/stdc++.h>
// using namespace std;
// int main(){
// 	int n;cin>>n;
// 	vector <int> nums (n+1);
// 	int temp;
// 	for (int i=0;i<n-1;i++){cin>>temp;nums[temp]=1;}
// 	for (int i=1;i<=n;i++) if (!nums[i]){cout<<i;break;}
// 	return 0;
// }`,
//   1069: `#include <bits/stdc++.h>
// using namespace std;
// int main(){
// 	int n=0,m;
// 	string s;
// 	cin>>s;
// 	char a='\0';
// 	for (int i=0;i<s.size();i++){
// 		if(a!=s[i]){
// 			m=max(n,m);
// 			n=0;
// 			a=s[i];
// 		}
// 		n++;
// 	}
// 	m=max(n,m);
// 	cout<<m<<endl;
// 	return 0;
// }`,
// };

const solutions: Record<string, string> = {
  "1068": `#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    while (n != 1) {
        cout << n << " ";
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
    }
    cout << 1;
}`,
  "1069":
    "# include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){\r\n\tint n=0,m;\r\n\tstring s;\r\n\tcin>>s;\r\n\tchar a='\\0';\r\n\tfor (int i=0;i<s.size();i++){\r\n\t\tif(a!=s[i]){\r\n\t\t\tm=max(n,m);\r\n\t\t\tn=0;\r\n\t\t\ta=s[i];\r\n\t\t}\r\n\t\tn++;\r\n\t}\r\n\tm=max(n,m);\r\n\tcout<<m<<endl;\r\n\treturn 0;\r\n}",
  "1070":
    '# include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){\r\n\tlong long n;\r\n\tcin>>n;\r\n\tif (n==1){\r\n\t\tcout<<1<<endl;\r\n\t\treturn 0;\r\n\t}\r\n\tif (n<4) {\r\n\t\tcout<<"NO SOLUTION"<<endl;\r\n\t\treturn 0;\r\n\t}\r\n\tcout<<2;\r\n\tfor (int i=2;2*i<=n;i++){\r\n\t\tcout<<" "<<2*i;\r\n\t}\r\n\tfor (int i=0;2*i+1<=n;i++){\r\n\t\tcout<<" "<<2*i+1;\r\n\t}\r\n\tcout<<endl;\r\n\treturn 0;\r\n}',
  "1071":
    "#include<bits/stdc++.h> \r\nusing namespace std; \r\nint main() \r\n{ \r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint t;\r\n\tlong long x,y;\r\n\tcin>>t;\r\n\tfor (int i=0;i<t;i++){\r\n\t\tcin>>x>>y;\r\n\t\tlong long m=max(x,y);\r\n\t\tif (m%2) swap(x,y);\r\n\t\tcout<<m*m-(m-x+y-1)<<'\\n';\r\n\t}\r\n\treturn 0; \r\n} ",
  "1072":
    "#include<bits/stdc++.h> \r\nusing namespace std; \r\nlong long sol(int n){\r\n\tswitch(n){\r\n\t\tcase 1:\r\n\t\t\treturn 0;\r\n\t\tcase 2:\r\n\t\t\treturn 0;\r\n\t\tcase 3:\r\n\t\t\treturn 8;\r\n\t\tdefault:\r\n\t\t\treturn 16*(n-2)-8+sol(n-2);\r\n\t}\r\n}\r\nint main() \r\n{ \r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint n;\r\n\tcin>>n;\r\n\tfor (long long i=1;i<=n;i++){\r\n\t\tcout<<i*i*(i*i-1)/2-sol(i)<<'\\n';\r\n\t}\r\n\treturn 0; \r\n} ",
  "1073":
    "#include <bits/stdc++.h>\nusing namespace std;\nmultiset <int> s;\nint n;\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n;\n\tfor (int i=0;i<n;++i){\n\t\tint t;cin>>t;\n\t\tset<int>::iterator it=s.upper_bound(t);\n\t\tif (it!=s.end()) s.erase(it);\n\t\ts.insert(t);\n\t}\n\tcout<<s.size()<<'\\n';\n\treturn 0;\n}",
  "1074":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<b;i++)\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\n\r\nint main(){\r\n\tfastio;\r\n\tint n;cin>>n;\r\n\tvector <int> a(n);\r\n\t\r\n\tfor (auto &x:a){\r\n\t\tcin>>x;\r\n\t}\r\n\tsort(all(a));\r\n\tint m=a[n/2];\r\n\tll re=0;\r\n\tfor (auto &x:a){\r\n\t\tre+=abs(x-m);\r\n\t}\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1076":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\nconst int MOD = 1000000007;\n\nint main(){\n\tfastio;\n\tint n,k;\n\tcin>>n>>k;\n\tmultiset<ll> lessPt,greatPt;\n\tvector<ll> arr(n);\n\tfor (int i=0; i<n; ++i) {\n\t\tll tmp;\n\t\tcin>>tmp;\n\t\tarr[i]=tmp;\n\t\tlessPt.insert(tmp);\n\n\t\tif (lessPt.size()>(k-1)/2) {\n\t\t\tll tmp2 = *(prev(lessPt.end()));\n\t\t\tlessPt.erase(prev(lessPt.end()));\n\t\t\tgreatPt.insert(tmp2);\n\t\t}\n\t\tif (i>=k) {\n\t\t\tif (*greatPt.begin() <= arr[i-k]) {\n\t\t\t\tgreatPt.erase(greatPt.find(arr[i-k]));\n\t\t\t}\n\t\t\telse {\n\t\t\t\tlessPt.erase(lessPt.find(arr[i-k]));\n\t\t\t\tll tmp2 = *(greatPt.begin());\n\t\t\t\tgreatPt.erase(greatPt.begin());\n\t\t\t\tlessPt.insert(tmp2);\n\t\t\t}\n\t\t}\n\n\t\tif (i>=k-1) {\n\t\t\tif (i!=k-1) cout<<' ';\n\t\t\tcout<<*greatPt.begin();\n\t\t}\n\t}\n\tcout<<'\\n';\n    return 0;\n}",
  "1077":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\n\r\nll re=0;\r\nvector <pair<int,int>> arr;\r\n\r\nint main()\r\n{\r\n    fastio;\r\n    int n,k;\r\n    cin>>n>>k;\r\n    priority_queue <pair<int,int>> l;\r\n    priority_queue <pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>r;\r\n    arr.assign(n,pair<int,int>());\r\n    for (int i=0;i<n;i++) {cin>>arr[i].first;arr[i].second=i;}\r\n    int lcnt=0;\r\n    int mid=(k+1)>>1;\r\n    for (int i=0;i<k;i++){\r\n        if (lcnt<mid) {\r\n            r.push(arr[i]);\r\n            l.push(r.top());\r\n            r.pop();\r\n            lcnt++;\r\n        }\r\n        else {\r\n            l.push(arr[i]);\r\n            r.push(l.top());\r\n            l.pop();\r\n        }\r\n    }\r\n    for (int i=0;i<k;i++)re+=abs(arr[i].first-l.top().first);\r\n    cout<<re;\r\n    for (int i=k;i<n;i++){\r\n        ll oldmean=l.top().first;\r\n        if (arr[i-k].first<=oldmean) lcnt--;\r\n        while(!l.empty() && l.top().second<=i-k)l.pop();\r\n        while(!r.empty() && r.top().second<=i-k)r.pop();\r\n        if (lcnt<mid) {\r\n            r.push(arr[i]);\r\n            l.push(r.top());\r\n            r.pop();\r\n            lcnt++;\r\n        }\r\n        else {\r\n            l.push(arr[i]);\r\n            r.push(l.top());\r\n            l.pop();\r\n        }\r\n        while(!l.empty() && l.top().second<=i-k)l.pop();\r\n        while(!r.empty() && r.top().second<=i-k)r.pop();\r\n        re+=abs(arr[i].first-l.top().first)-abs(arr[i-k].first-l.top().first);\r\n        ll tmp=abs(oldmean-l.top().first);\r\n        re+=tmp;\r\n        if (k%2==0){\r\n            if (oldmean>l.top().first) re+=tmp;\r\n            else re-=tmp;\r\n        }\r\n        cout<<' '<<re;  \r\n    }\r\n    cout<<'\\n';\r\n    return 0;    \r\n}",
  "1078":
    "#include <bits/stdc++.h>\n#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n#define ll long long\n#define MOD 1000000007;\nusing namespace std;\n\n\n\nvoid solve(){\n    int n;\n    cin>>n;\n    vector<vector<ll>> dp(n+1,vector<ll>(n+1));\n    vector<string>s(n);\n    for (int i=0;i<n;++i) cin>>s[i];\n    dp[1][1]=1;\n    for (int i=1;i<=n;++i){\n        for (int j=1;j<=n;++j){\n            dp[i][j]=(dp[i][j]+dp[i-1][j]+dp[i][j-1])%MOD;\n            if (s[i-1][j-1]=='*') dp[i][j]=0;\n        }\n    }\n    cout<<dp[n][n]<<'\\n';\n}\n\nint main()\n{\n    fastio;\n    solve();\n\treturn 0;\n}\n\n",
  "1079":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst int maxn=1e6+1.5;\nconst ll MOD=1000000007;\nll fac[maxn];\nll invFac[maxn];\nll binpow(ll x, ll y){\n\tll re=1;\n\twhile (y){\n\t\tif (y&1){\n\t\t\tre=re*x%MOD;\n\t\t}\n\t\tx=(x*x)%MOD;\n\t\ty>>=1;\n\t}\n\treturn re;\n}\nvoid setArr(){\n\tfac[0]=invFac[0]=1;\n\tfor (ll i=1;i<maxn;++i){\n\t\tfac[i]=(fac[i-1]*i)%MOD;\n\t\tinvFac[i]=binpow(fac[i],MOD-2);\n\t}\n}\nint main(){\n\tsetArr();\n\tint n;\n\tcin>>n;\n\twhile (n--){\n\t\tll x,y;\n\t\tcin>>x>>y;\n\t\tcout<<fac[x]*invFac[x-y]%MOD*invFac[y]%MOD<<'\\n';\n\t}\n\treturn 0;\n}",
  "1081":
    '# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n# define MOD 1000000007\n# define ten6 1000002\nusing namespace std;\n\nvector<int> maxCommon(ten6,0);\n\nvector<int> lsPrime;\n\nint binpow(int x, int y){\n    assert(y>=0);\n    int re=1;\n    while (y){\n        if (y&1) re*=x;\n        y>>=1;\n        x*=x;\n    }\n    return re;\n}\n\nvoid setPrime(){\n    bool isPrime[ten6]{0};\n    for (int i=2;i<ten6;++i) isPrime[i]=true;\n    for (int i=2;i*i<ten6;++i) {\n        if (!isPrime[i]) continue;\n        lsPrime.push_back(i);\n        int k=i*i;\n        while(k<ten6){\n            isPrime[k]=false;\n            k+=i;\n        }\n    }\n}\n\nvoid setFac(vector<pair<int,int>> & lsFac,int curr,int idx) {\n    if (idx>=lsFac.size()) {\n        ++maxCommon[curr];\n        return;\n    }\n    for (int i=0;i<=lsFac[idx].second;++i){\n        setFac(lsFac,curr*binpow(lsFac[idx].first,i),idx+1);\n    }\n}\n\nvoid setFactor(int x) {\n    if (x==1) return;\n    vector<pair<int,int>> lsFac;\n    for (int p:lsPrime) {\n        if (p*p>x) break;\n        int reTmp=0;\n        while (x%p==0){\n            ++reTmp;\n            x/=p;\n        }\n        lsFac.push_back({p,reTmp});\n    }\n    if (x>1) {\n        lsFac.push_back({x,1});\n    }\n    setFac(lsFac,1,0);\n}\n\n\nint main()\n{\n    // freopen("test_input.txt","r",stdin);\n    fastio; \n    setPrime();\n    int n;\n    cin>>n;\n    for (int i=0;i<n;++i) {\n        int tmp;\n        cin>>tmp;\n        setFactor(tmp);\n    }\n    int re=1;\n    for (int i=1;i<ten6;++i){\n        if (maxCommon[i]>=2) re=i;\n    }\n    cout<<re<<\'\\n\';\n    return 0;\n}',
  "1083":
    "# include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){\r\n\tint n;\r\n\tcin>>n;\r\n\tvector <int> nums (n+1);\r\n\tint temp;\r\n\tfor (int i=0;i<n-1;i++){cin>>temp;nums[temp]=1;}\r\n\tfor (int i=1;i<=n;i++) if (!nums[i]){cout<<i;break;}\r\n\treturn 0;\r\n}",
  "1084":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<=b;i++)\r\nusing namespace std;\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint n,m,k;\r\n\tcin>>n>>m>>k;\r\n\tvector <int> narr(n);\r\n\tvector <int> marr(m);\r\n\tREP(i,0,n-1) cin>>narr[i];\r\n\tREP(i,0,m-1) cin>>marr[i];\r\n\tsort(narr.begin(),narr.end());\r\n\tsort(marr.begin(),marr.end());\r\n\tint cn=n-1,cm=m-1,c=0;\r\n\twhile (cn>=0&&cm>=0){\r\n\t\tif (abs(narr[cn]-marr[cm])<=k) {\r\n\t\t\tcm--;cn--;c++;\r\n\t\t}\r\n\t\telse {\r\n\t\t\tif (narr[cn]>marr[cm]+k) cn--;\r\n\t\t\telse cm--;\t\r\n\t\t}\r\n\t}\r\n\tcout<<c<<endl;\r\n\treturn 0;\r\n}",
  "1085":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nvector <ll> arr;\r\nint n,k;\r\nbool check(ll s){\r\n\tint cnt=1;\r\n\tll acc=0;\r\n\tfor(int i = 0;i<n;i++){\r\n\t\tll tmp=acc+arr[i];\r\n\t\tif (tmp>s) {\r\n\t\t\tcnt++;\r\n\t\t\tacc=arr[i];\r\n\t\t}\r\n\t\telse acc=tmp;\r\n\t\tif (acc>s||cnt>k) return false;\r\n\t}\r\n\treturn true;\r\n}\r\nint main(){\r\n\tfastio;\r\n\tcin>>n>>k; arr.assign(n,0);\r\n\tll r=0,l=1;\r\n\tfor (auto &v:arr){\r\n\t\tcin>>v;\r\n\t\tr+=v;\r\n\t}\r\n\twhile (l<r){\r\n\t\tll mid=(l+r)>>1;\r\n\t\tif (check(mid)) r=mid;\r\n\t\telse l=mid+1;\r\n\t}\r\n\tcout<<l<<'\\n';\r\n\treturn 0;\r\n}",
  "1087":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nint g(char x){\n\tswitch(x){\n\t\tcase 'A':\n\t\t\treturn 0;\n\t\tcase 'C':\n\t\t\treturn 1;\n\t\tcase 'T':\n\t\t\treturn 2;\n\t\tcase 'G':\n\t\t\treturn 3;\n\t}\n\treturn -1;\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tstring s;\n\tcin>>s;\n\tstring re;\n\tarray<int,4> check;\n\tcheck.fill(0);\n\tint cnt=0;\n\tfor (char &c:s){\n\t\tif (!check[g(c)]){\n\t\t\tcheck[g(c)]=1;\n\t\t\t++cnt;\n\t\t}\n\t\tif (cnt==4){\n\t\t\tcnt=0;\n\t\t\tcheck.fill(0);\n\t\t\tre.push_back(c);\n\t\t}\n\t}\n\tstring tmp=\"ACGT\";\n\tfor (char&c:tmp){\n\t\tif (!check[g(c)]){\n\t\t\tre.push_back(c);\n\t\t\tbreak;\n\t\t}\n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "1090":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<=b;i++)\r\nusing namespace std;\r\nconst ll MOD=1000000007;\r\n\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint n,x;\r\n\tcin>>n>>x;\r\n\tvector<int> arr(n);\r\n\tREP(i,0,n-1)cin>>arr[i];\r\n\tsort(arr.begin(),arr.end());\r\n\tint l=0,r=n-1,c=0;\r\n\twhile(l<r){\r\n\t\tif(arr[l]+arr[r]<=x){\r\n\t\t\tl++;r--;\r\n\t\t}\r\n\t\telse r--;\r\n\t\tc++;\r\n\t}\r\n\tif (l==r) c++;\r\n\tcout<<c<<endl;\r\n\treturn 0;\r\n}",
  "1091":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<b;i++)\r\nusing namespace std;\r\nvector<int>memo;\r\nint findMemo(int t){\r\n\tif (memo[t]==-2) return memo[t]=t;\r\n\tif (memo[t]<=0) return -1;\r\n\tmemo[t]--;\r\n\treturn memo[t]=findMemo(memo[t]);\r\n}\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint n,m;\r\n\tcin>>n>>m;\r\n\tvector <int>  h(n);\r\n\tvector<pair<int,int>> t;\r\n\tvector<int> re(m,-1);\r\n\tmemo.assign(n,-2);\r\n\tint temp;\r\n\tREP(i,0,n)cin>>h[i];\r\n\tREP(i,0,m){cin>>temp;t.push_back({temp,i});}\r\n\tsort(all(h));\r\n\tsort(all(t));\r\n\ttemp=0;\r\n\tfor(int i=0;i<n&&temp<m;){\r\n\t\tif(t[temp].first<h[i]){\r\n\t\t\tre[t[temp].second]=i-1;\r\n\t\t\ttemp++;\r\n\t\t}\r\n\t\telse i++;\r\n\t}\r\n\tfor(;temp<m;temp++) re[t[temp].second]=n-1;\r\n\t\r\n\tREP(i,0,m){\r\n\t\tif (re[i]==-1) continue;\r\n\t\tre[i]=findMemo(re[i]);\r\n\t\t}\r\n\tREP(i,0,m) \r\n\t{\r\n\t\tif (re[i]!=-1)\r\n\t\tcout<<h[re[i]]<<'\\n';\r\n\t\telse cout<<-1<<'\\n';\r\n\t}\r\n\treturn 0;\r\n}",
  "1092":
    "#include<bits/stdc++.h> \r\nusing namespace std; \r\nvoid printArr(vector <int> & x){\r\n\tcout<<x.size()<<'\\n'<<x[0];\r\n\tfor (int i=1;i<x.size();i++){\r\n\t\tcout<<' '<<x[i];\r\n\t}\r\n\tcout<<'\\n';\r\n}\r\nint main() \r\n{ \r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint n;\r\n\tcin>>n;\r\n\tvector <int> nums,nums2;\r\n\tif (n%4!=0&&n%4!=3) {\r\n\t\tcout<<\"NO\"<<'\\n';\r\n\t}\r\n\telse{\r\n\t\tcout<<\"YES\\n\";\r\n\t\tif (n%4==0){\r\n\t\t\tfor (int i=1;i<=n/4;i++)\t\r\n\t\t\t\t{nums.push_back(i);nums.push_back(n-i+1);} \r\n\t\t\tprintArr(nums);\r\n\t\t\tnums={};\r\n\t\t\tfor (int i=n/4+1;i<=n/2;i++)\t\r\n\t\t\t\t{nums.push_back(i);nums.push_back(n-i+1);}\r\n\t\t\tprintArr(nums);\r\n\t\t}\r\n\t\telse{\r\n\t\t\tint i;\r\n\t\t\tnums2.push_back(1);\r\n\t\t\tfor(i=0;i<(n+1)/4;i++){\r\n\t\t\t\tnums.push_back(2*(i+1)+1);\r\n\t\t\t\tnums2.push_back(2*(i+1));\r\n\t\t\t}\r\n\t\t\tfor (;i<n/2;i++){\r\n\t\t\t\tnums.push_back(2*(i+1));\r\n\t\t\t\tnums2.push_back(2*(i+1)+1);\r\n\t\t\t}\r\n\t\t\tprintArr(nums);printArr(nums2);\r\n\t\t}\r\n\t}\r\n\treturn 0; \r\n} ",
  "1093":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll MOD = 1000000007;\n\nll binPow(ll x, ll y) {\n\tll re=1;\n\twhile(y){\n\t\tif (y&1){\n\t\t\tre=(re*x)%MOD;\n\t\t}\n\t\tx=(x*x)%MOD;\n\t\ty>>=1;\n\t}\n\treturn re;\n}\n\nint main(){\n\tll n;\n\tcin>>n;\n\tll tg = n*(n+1)/2;\n\tif (tg%2) {\n\t\tcout<<0<<'\\n';\n\t\treturn 0;\n\t}\n\ttg/=2;\n\tvector<ll> dp(tg+1,0);\n\tdp[0]=1;\n\tfor (ll i=1;i<=n;++i) {\n\t\tfor (ll j =tg;j>=i;--j) {\n\t\t\tdp[j]=(dp[j]+dp[j-i])%MOD;\n\t\t}\n\t}\n\tcout<<(dp[tg]*binPow(2LL,MOD-2))%MOD<<'\\n';\n    return 0;\n}",
  "1094":
    "# include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){\r\n\tlong long n,pre=0,curr,re=0;\r\n\tcin>>n;\r\n\tfor (int i=0;i<n;i++){\r\n\t\tcin>>curr;\r\n\t\tif (curr<pre) {\r\n\t\t\tre+=pre-curr;\r\n\t\t\tcurr=pre;\r\n\t\t}\r\n\t\tpre=curr;\r\n\t}\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1095":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<=b;i++)\r\nusing namespace std;\r\n\r\nconst ll MOD=1000000007;\r\nll expo(ll p, ll q){\r\n\tll re=1;\r\n\twhile (q){\r\n\t\tif (q&1)re=re*p%MOD;\r\n\t\tq>>=1;\r\n\t\tp=p*p%MOD;\r\n\t}\r\n\treturn re%MOD;\t\r\n}\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint t;\r\n\tcin>>t;\r\n\twhile(t--){\r\n\tll a,b;\r\n\tcin>>a>>b;\r\n\tcout<<expo(a,b)<<'\\n';\r\n\t}\r\n\treturn 0;\r\n}",
  "1096":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll MOD=1000000007;\n\nvector<vector<ll>> mult(vector<vector<ll>>& x, vector<vector<ll>> &y){\n\tint n1=x.size(),m1=x[0].size(),n2=y.size(),m2=y[0].size();\n\tvector<vector<ll>> re (n1,vector<ll>(m2,0));\n\tfor (int i=0;i<n1;++i){\n\t\tfor (int j=0;j<m2;++j){\n\t\t\tfor (int k=0;k<m1;++k){\n\t\t\t\tre[i][j]=(re[i][j]+x[i][k]*y[k][j])%MOD;\n\t\t\t}\n\t\t}\n\t}\n\treturn re;\n}\n\nvector<vector<ll>> binpow(vector<vector<ll>> x , ll y){\n\tvector<vector<ll>> re(6,vector<ll>(6,0));\n\tfor (int i=0;i<6;++i) re[i][i]=1;\n\twhile (y){\n\t\tif (y&1) re=mult(re,x);\n\t\ty>>=1;\n\t\tx=mult(x,x);\n\t}\n\treturn re;\n}\n\nint main(){\n\tvector<vector<ll>> mat(6,vector<ll>(6,0));\n\tfor (int i=0;i<6;++i) mat[i][0]=1;\n\tfor (int i=0;i<5;++i) mat[i][i+1]=1;\n\tll n;cin>>n;\n\tmat=binpow(mat,n);\n\tvector<vector<ll>> init(1,vector<ll>(6,0));\n\tinit[0][4]=init[0][5]=1;\n\tfor (int i=3;i>=0;--i)init[0][i]=2*init[0][i+1];\n\tcout<<mult(init,mat)[0][5]<<'\\n';\n}",
  "1097":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst int MOD = 1000000007;\n\nint main(){\n\tll n;\n\tcin>>n;\n\tvector<ll> arr(n);\n\tfor (int i=0;i<n;++i) cin>>arr[i];\n\tvector<vector<pair<ll,ll>>> dp(n+1,vector<pair<ll,ll>>(n+1,{-1,-1}));\n\tfor (int i=0;i<n;++i) dp[i][i]={arr[i],0};\n\tfor (int i=1;i<n;++i) {\n\t\tfor (int j=0;j<n;++j) {\n\t\t\tif (i+j>=n) break;\n\t\t\tauto p1=dp[j][i+j-1].second+arr[i+j];\n\t\t\tauto p2=dp[j+1][i+j].second+arr[j];\n\t\t\tif (p1>p2) dp[j][i+j]= {p1,dp[j][i+j-1].first};\n\t\t\telse dp[j][i+j]= {p2,dp[j+1][i+j].first};\n\t\t}\n\t}\n\tcout<<dp[0][n-1].first<<'\\n';\n    return 0;\n}",
  "1099":
    '#include <bits/stdc++.h>\nusing namespace std;\nvoid solve(){\n\tint n;cin>>n;\n\tint re=0;\n\tfor (int i=0;i<n;++i){\n\t\tint tmp;cin>>tmp;\n\t\tif (i%2) re^=tmp;\n\t}\n\tcout<<((re==0)?"second":"first")<<\'\\n\';\n}\nint main(){\n\tint t;cin>>t;\n\twhile(t--)solve();\n\treturn 0;\n}',
  "1111":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nint main(){\n\tstring s;cin>>s;\n\tint n=s.size();\n\tstring ns=\"|\";\n\tfor (char&c:s){\n\t\tns.push_back(c);\n\t\tns.push_back('|');\n\t}\n\tint nn=ns.size();\n\tvector<int> mxrad(nn,0);\n\tint rad=0,cen=0;\n\twhile (cen<ns.size()){\n\t\twhile (cen-rad-1>=0&&cen+rad+1<ns.size()&&ns[cen-rad-1]==ns[cen+rad+1]) ++rad;\n\t\tmxrad[cen]=rad;\n\n\t\tint oldcen=cen,oldrad=rad;\n\t\tcen+=1;rad=0;\n\n\t\twhile (oldcen+oldrad>=cen){\n\t\t\tint mircen=oldcen-(cen-oldcen);\n\t\t\tint mxlen=oldcen+oldrad-cen;\n\t\t\tif (mxrad[mircen]<mxlen){\n\t\t\t\tmxrad[cen]=mxrad[mircen];\n\t\t\t\tcen+=1;\n\t\t\t}\n\t\t\telse if (mxrad[mircen]>mxlen){\n\t\t\t\tmxrad[cen]=mxlen;\n\t\t\t\tcen+=1;\n\t\t\t}\n\t\t\telse {\n\t\t\t\trad=mxlen;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tint mxi=-1,mx=-1;\n\tfor (int i=0;i<nn;++i){\n\t\tif (mxrad[i]>mx){\n\t\t\tmxi=i;mx=mxrad[i];\n\t\t}\n\t}\n\ts.clear();\n\tfor (int i=mxi-mx;i<=mxi+mx;++i){\n\t\tif (ns[i]!='|')s.push_back(ns[i]);\n\t}\n\tcout<<s<<'\\n';\n\treturn 0;\n\n}",
  "1130":
    "#include <bits/stdc++.h>\n#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n#define ll long long\nusing namespace std;\nvector <vector<int>> adjList;\nvector <int> visited;\nint re;\n\nbool cntEdges(int curr){\n    visited[curr]=1;\n    bool check=false;\n    for (int &v:adjList[curr]){\n        if (visited[v])continue;\n        check|=cntEdges(v);\n    }\n    re+=check;\n    return !check;\n}\n\nvoid solve() {\n    int n;\n    cin>>n;\n    adjList.assign(n,vector<int>());\n    visited.assign(n,0);\n    int x,y;\n    while (cin>>x>>y) {\n        --x;--y;\n        adjList[x].push_back(y);\n        adjList[y].push_back(x);\n    }\n    re=0;\n    cntEdges(0);\n    cout<<re<<'\\n';\n}\nint main()\n{\n    fastio;\n    solve();\n\treturn 0;\n}",
  "1131":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\n\r\nint n;\r\nint re=0;\r\nint maxnode=0;\r\nvector <vector<int>> mp;\r\nvector <bool> vst;\r\nvector<int> dep;\r\nqueue <int> q;\r\n\t\r\nvoid bfs(){\r\n\twhile (!q.empty()){\r\n\t\tint v=q.front();\r\n\t\tq.pop();\r\n\t\tfor (auto u:mp[v]){\r\n\t\t\tif (vst[u])continue;\r\n\t\t\tvst[u]=true;\r\n\t\t\tdep[u]=dep[v]+1;\r\n\t\t\tif(re<dep[u]) {re=dep[u];maxnode=u;}\r\n\t\t\tq.push(u);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nint main(){\r\n\tfastio;\r\n\tcin>>n;\r\n\tmp.assign(n,vector<int>());\r\n\tvst.assign(n,false);\r\n\tdep.assign(n,0);\r\n\tint x,y;\r\n\tfor (int i=0;i<n-1;i++){\r\n\t\tcin>>x>>y;x--;y--;\r\n\t\tmp[x].push_back(y);\r\n\t\tmp[y].push_back(x);\r\n\t}\r\n\tq.push(0);\r\n\tvst[0]=true;\r\n\tbfs();\r\n\tvst.assign(n,false);\r\n\tdep[maxnode]=0;vst[maxnode]=true;\r\n\tq.push(maxnode);\r\n\tbfs();\r\n\tcout<<re<<'\\n';\r\n\treturn 0;\r\n}",
  "1132":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\n# define MOD 1000000007\nusing namespace std;\n \nint n;\nint maxnode[3];\nvector <vector<int>> mp;\nvector <bool> vst;\nvector<int> dep;\nvector<int> depReal[2];\n\t\nint bfs(int k,int start,int mxnum){\n    vector<int>*depAddr;\n    if (k<0)depAddr=&dep;\n    else depAddr=&depReal[k];\n    vector<int>&dep=*depAddr;\n    dep.assign(n,0);\n    vst.assign(n,false);\n    queue <int> q;\n    q.push(start);\n    dep[start]=0;\n    vst[start]=true;\n\n    int re=0;\n\twhile (!q.empty()){\n\t\tint v=q.front();\n\t\tq.pop();\n\t\tfor (int & u:mp[v]){\n\t\t\tif (vst[u])continue;\n\t\t\tvst[u]=true;\n\t\t\tdep[u]=dep[v]+1;\n\t\t\tif(re<dep[u]) {\n                re=dep[u];\n                maxnode[mxnum]=u;\n            }\n\t\t\tq.push(u);\n\t\t}\n\t}\n    return re;\n}\n \nint main(){\n\tfastio;\n\tcin>>n;\n\tmp.assign(n,vector<int>());\n\tint x,y;\n\tfor (int i=0;i<n-1;i++){\n\t\tcin>>x>>y;x--;y--;\n\t\tmp[x].push_back(y);\n\t\tmp[y].push_back(x);\n\t}\n    bfs(-1,0,0);\n    bfs(0,maxnode[0],1);\n    bfs(1,maxnode[1],2);\n    for (int i=0;i<n;++i) {\n        if (i!=0) cout<<' ';\n        cout<<max(depReal[0][i],depReal[1][i]);\n    }\n    cout<<'\\n';\n\treturn 0;\n}\n\n",
  "1133":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\n# define MOD 1000000007\nusing namespace std;\n \nint n;\nvector <vector<int>> adList;\nvector <bool> visit;\nvector<pair<ll,ll>> d;\n\npair<ll,ll> dfs(int curr){\n    ll numnode=1,val=0;\n    for (int &v:adList[curr]){\n        if (visit[v]) continue;\n        visit[v]=true;\n        pair<ll,ll>tmp=dfs(v);\n        numnode+=tmp.first;\n        val+=tmp.first+tmp.second;\n    }\n    return d[curr]={numnode,val};\n}\n\nvoid dfs2(int curr) {\n    for (int &v:adList[curr]) {\n        if (visit[v]) continue;\n        visit[v]=true;\n        d[v].second=d[curr].second-2*d[v].first+n;\n        dfs2(v);\n    }\n} \n\nint main(){\n\tfastio;\n\tcin>>n;\n\tadList.assign(n,vector<int>());\n    d.assign(n,{0,0});\n    visit.assign(n,0);\n\tint x,y;\n\tfor (int i=0;i<n-1;i++){\n\t\tcin>>x>>y;x--;y--;\n\t\tadList[x].push_back(y);\n\t\tadList[y].push_back(x);\n\t}\n    visit[0]=true;\n    dfs(0);\n    visit.assign(n,false);\n    visit[0]=true;\n    dfs2(0);\n    for (int i=0;i<n;++i){\n        if (i!=0) cout<<' ';\n        cout<<d[i].second;\n    }\n    cout<<'\\n';\n\treturn 0;\n}\n\n",
  "1135":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<vector<int>> adjList;\nint up[(int)(2e5+1.5)][20] {};\nvector<int>tin,tout,d;\nint n,q,timer;\n\nvoid dfs(int curr,int pre){\n\ttin[curr]=timer++;\n\tup[curr][0]=pre;\n\tfor (int i=1;i<20;++i){\n\t\tup[curr][i]=up[up[curr][i-1]][i-1];\n\t}\n\tfor (int &v:adjList[curr]){\n\t\tif (v==pre) continue;\n\t\td[v]=d[curr]+1;\n\t\tdfs(v,curr);\n\t}\n\ttout[curr]=timer++;\n}\n\nbool is_ancestor(int par,int child){\n\treturn tin[par]<=tin[child]&&tout[par]>=tout[child];\n}\n\nint lca(int n1,int n2){\n\tif (is_ancestor(n1,n2)) return n1;\n\tif (is_ancestor(n2,n1)) return n2;\n\tfor (int i=19;i>=0;--i){\n\t\tif (!is_ancestor(up[n1][i],n2)) n1=up[n1][i];\n\t}\n\treturn up[n1][0];\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tadjList.assign(n,vector<int>());\n\ttin.assign(n,-1);\n\ttout.assign(n,-1);\n\td.assign(n,-1);\n\td[0]=0;\n\ttimer=0;\n\tfor (int i=1;i<n;++i){\n\t\tint a,b;cin>>a>>b;--a;--b;\n\t\tadjList[a].push_back(b);\n\t\tadjList[b].push_back(a);\n\t}\n\tdfs(0,0);\n\tfor (int i=0;i<q;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\tcout<<d[a]+d[b]-2*d[lca(a,b)]<<'\\n';\n\t}\n\treturn 0;\n}",
  "1136":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nvector<vector<int>> adj;\nvector<vector<int>> up;\nvector<int> tin,tout;\nint n,q,timer;\n\nvoid dfs(int curr, int p){\n\ttin[curr]=timer++;\n\tup[curr][0]=p;\n\n\tfor (int i=1;i<20;++i){\n\t\tup[curr][i]=up[up[curr][i-1]][i-1];\n\t}\n\n\tfor (int&v:adj[curr]){\n\t\tif (v==p) continue;\n\t\tdfs(v,curr);\n\t}\n\ttout[curr]=timer++;\n}\n\nbool is_ancestor(int x, int y) {\n\treturn tin[x]<=tin[y] && tout[x]>=tout[y];\n}\n\nint lca(int x,int y){\n\tif (is_ancestor(x,y)) return x;\n\tif (is_ancestor(y,x)) return y;\n\n\tfor (int i=19;i>=0;--i){\n\t\tint tmp=up[x][i];\n\t\tif (is_ancestor(tmp,y)) continue;\n\t\tx=tmp;\n\t}\n\n\treturn up[x][0];\n}\n\nvoid dfs1(vector<int>&treeVal,int curr, int p){\n\tfor (int&v:adj[curr]){\n\t\tif (v==p) continue;\n\t\tdfs1(treeVal,v,curr);\n\t\ttreeVal[curr]+=treeVal[v];\n\t}\n}\n\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tadj.assign(n,vector<int>());\n\tfor (int i=0;i<n-1;++i){\n\t\tint x,y;cin>>x>>y;--x;--y;\n\t\tadj[x].push_back(y);\n\t\tadj[y].push_back(x);\n\t}\n\ttimer=0;\n\ttin.assign(n,0);\n\ttout.assign(n,0);\n\tup.assign(n,vector<int>(20,0));\n\tdfs(0,0);\n\tvector<int> treeVal(n);\n\tfor (int i=0;i<q;++i){\n\t\tint a,b;cin>>a>>b;--a;--b;\n\t\tint l=lca(a,b);\n\t\tif (l!=0) treeVal[up[l][0]]-=1;\n\t\ttreeVal[l]-=1;\n\t\ttreeVal[a]+=1;\n\t\ttreeVal[b]+=1;\n\t}\n\tdfs1(treeVal,0,0);\n\tfor (int i=0;i<n;++i){\n\t\tif (i!=0) cout<<' ';\n\t\tcout<<treeVal[i];\n\t}\n\tcout<<'\\n';\n\treturn 0;\n}",
  "1137":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nvector<vector<int>> adj;\nvector<array<int,2>> seg;\nvector<ll> st;\nvector<int> a;\nint timer,n,q;\nvoid dfs(int curr,int p){\n\tseg[curr][0]=timer++;\n\tfor (int &v:adj[curr]){\n\t\tif (v==p) continue;\n\t\tdfs(v,curr);\n\t}\n\tseg[curr][1]=timer++;\n}\n\nvoid buildTree(int v,int tl, int tr){\n\tif (tl==tr){\n\t\tst[v]=a[tl];\n\t}\n\telse {\n\t\tint mid=(tl+tr)>>1;\n\t\tbuildTree(v*2,tl,mid);\n\t\tbuildTree(v*2+1,mid+1,tr);\n\t\tst[v]=st[v*2]+st[v*2+1];\n\t}\n}\n\nll sum(int v, int l,int r, int tl, int tr){\n\tif (l==tl&&r==tr){\n\t\treturn st[v];\n\t}\n\tif (l>r) return 0;\n\tint mid=(tl+tr)>>1;\n\treturn sum(v*2,l,min(r,mid),tl,mid)+sum(v*2+1,max(l,mid+1),r,mid+1,tr);\n}\n\nvoid update(int v, int tl, int tr, int pos, int val){\n\tif (tl==tr){\n\t\tst[v]=val;\n\t\treturn;\n\t}\n\tint mid=(tl+tr)>>1;\n\tif (pos<=mid) update(v*2,tl,mid,pos,val);\n\telse update(v*2+1,mid+1,tr,pos,val);\n\tst[v]=st[v*2]+st[v*2+1];\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tvector<int> a1(n);\n\tfor (int&v:a1) cin>>v;\n\tadj.assign(n,vector<int>());\n\tfor (int i=0;i<n-1;++i){\n\t\tint x,y;cin>>x>>y;--x;--y;\n\t\tadj[x].push_back(y);\n\t\tadj[y].push_back(x);\n\t}\n\tseg.assign(n,array<int,2>());\n\ttimer=0;\n\tdfs(0,0);\n\ta.assign(timer,0);\n\tfor (int i=0;i<n;++i) a[seg[i][0]]=a1[i];\n\tst.assign(4*timer,0);\n\tbuildTree(1,0,timer-1);\n\tfor (int i=0;i<q;++i){\n\t\tint t;cin>>t;\n\t\tif (t==1){\n\t\t\tint s,x;\n\t\t\tcin>>s>>x;--s;\n\t\t\tupdate(1,0,timer-1,seg[s][0],x);\n\t\t}\n\t\telse{\n\t\t\tint s;\n\t\t\tcin>>s;--s;\n\t\t\tcout<<sum(1,seg[s][0],seg[s][1],0,timer-1)<<'\\n';\n\t\t}\n\t}\n\treturn 0;\n}",
  "1138":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nvector<vector<int>> adj;\nvector<array<int,2>> seg,seg1,seg2;\nint timer,n,q;\nvector<int> a;\nll sA=0;\n\nvoid dfs(int curr,int p){\n\tseg[curr][0]=timer++;\n\tfor (int &v:adj[curr]){\n\t\tif (v==p) continue;\n\t\tdfs(v,curr);\n\t}\n\n\tseg[curr][1]=timer-1;\n}\n\nvoid buildTree(int v,int tl, int tr, vector<int>&a,vector<ll>&st){\n\tif (tl==tr){\n\t\tst[v]=a[tl];\n\t}\n\telse {\n\t\tint mid=(tl+tr)>>1;\n\t\tbuildTree(v*2,tl,mid,a,st);\n\t\tbuildTree(v*2+1,mid+1,tr,a,st);\n\t\tst[v]=st[v*2]+st[v*2+1];\n\t}\n}\n\nll sum(int v, int l,int r, int tl, int tr,vector<ll>&st){\n\tif (l==tl&&r==tr){\n\t\treturn st[v];\n\t}\n\tif (l>r) return 0;\n\tint mid=(tl+tr)>>1;\n\treturn sum(v*2,l,min(r,mid),tl,mid,st)+sum(v*2+1,max(l,mid+1),r,mid+1,tr,st);\n}\n\nvoid update(int v, int tl, int tr, int pos, int val,vector<ll>&st){\n\tif (tl==tr){\n\t\tst[v]=val;\n\t\treturn;\n\t}\n\tint mid=(tl+tr)>>1;\n\tif (pos<=mid) update(v*2,tl,mid,pos,val,st);\n\telse update(v*2+1,mid+1,tr,pos,val,st);\n\tst[v]=st[v*2]+st[v*2+1];\n}\n\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tvector<int> a1(n);\n\tfor (int&v:a1) cin>>v;\n\tadj.assign(n,vector<int>());\n\tfor (int i=0;i<n-1;++i){\n\t\tint x,y;cin>>x>>y;--x;--y;\n\t\tadj[x].push_back(y);\n\t\tadj[y].push_back(x);\n\t}\n\tseg.assign(n,array<int,2>());\n\tseg1.assign(n,array<int,2>());\n\tseg2.assign(n,array<int,2>());\n\ttimer=0;\n\tdfs(0,0);\n\ta.assign(n,0);\n\t\n\tfor (int i=0;i<n;++i){\n\t\ta[seg[i][0]]=a1[i];\n\t\tsA+=a1[i];\n\n\t\tseg1[i]=seg[i];\n\t\tseg2[i]={seg[i][1],seg[i][0]};\n\t}\n\n\tsort(seg1.begin(),seg1.end());sort(seg2.begin(),seg2.end());\n\tvector<int> pref(n);\n\tfor (int i=0;i<n;++i) pref[i]=a[seg2[i][1]];\n\n\tvector<ll> st1(4*n),st2(4*n);\n\tbuildTree(1,0,n-1,a,st1);\n\tbuildTree(1,0,n-1,pref,st2);\n\n\tfor (int i=0;i<q;++i){\n\t\tint t,s;cin>>t>>s;\n\t\t--s;\n\t\tint pos=seg[s][0];\n\t\tif (t==1){\n\t\t\tint x;\n\t\t\tcin>>x;\n\t\t\tint prepos=lower_bound(seg2.begin(),seg2.end(),array<int,2>({seg[s][1],seg[s][0]}))-seg2.begin();\n\t\t\tupdate(1,0,n-1,pos,x,st1);\n\t\t\tupdate(1,0,n-1,prepos,x,st2);\n\t\t\tsA=sA-a[pos]+x;\n\t\t\ta[pos]=x;\n\t\t}\n\t\telse{\n\t\t\tint prepos=lower_bound(seg2.begin(),seg2.end(),array<int,2>({seg[s][0],0}))-seg2.begin();\n\t\t\tcout<<sA-sum(1,pos+1,n-1,0,n-1,st1)-sum(1,0,prepos-1,0,n-1,st2)\n\t\t\t<<'\\n';\n\t\t}\n\t}\n\treturn 0;\n}",
  "1139":
    "#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> adj;\nvector<array<int,3>>seg;\nint n,timer;\nvector<int> col;\nvector<int> ncol;\nvector<int> ans;\nvector<int> F;\nmap<int,int> m;\n\nvoid dfs(int cur,int par){\n\tseg[cur][1]=timer++;\n\tncol[timer-1]=col[cur];\n\tfor(int &v:adj[cur]){\n\t\tif (v==par)continue;\n\t\tdfs(v,cur);\n\t}\n\tseg[cur][0]=timer-1;\n}\nvoid increase(int pos, int val){\n\tfor (int i=pos;i<n;i=i|(i+1)){\n\t\tF[i]+=val;\n\t}\n}\nint sum1(int pos){\n\tint re=0;\n\tfor (int i=pos;i>=0;i=(i&(i+1))-1){\n\t\tre+=F[i];\n\t}\n\treturn re;\n}\nint sum(int l,int r){\n\treturn sum1(r)-sum1(l-1);\n}\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n;\n\tcol.assign(n,0);\n\tans.assign(n,0);\n\tadj.assign(n,vector<int>());\n\tfor (int&v:col)cin>>v;\n\tfor (int i=0;i<n-1;++i){\n\t\tint a,b;cin>>a>>b;--a;--b;\n\t\tadj[a].push_back(b);\n\t\tadj[b].push_back(a);\n\t}\n\ttimer=0;\n\tseg.assign(n,array<int,3>());\n\tncol.assign(n,0);\n\tfor (int i=0;i<n;++i){\n\t\tseg[i][2]=i;\n\t}\n\tdfs(0,0);\n\tsort(seg.begin(), seg.end());\n\n\tF.assign(n,0);\n\tint currend=-1;\n\tfor (auto &ar:seg){\n\t\twhile (currend<ar[0]){\n\t\t\t++currend;\n\t\t\tincrease(currend,1);\n\t\t\tint x=m[ncol[currend]];\n\t\t\tif (x!=0) increase(x-1,-1);\n\t\t\tm[ncol[currend]]=currend+1;\n\t\t}\n\t\tans[ar[2]]=sum(ar[1],ar[0]);\n\t}\n\tfor (int &v:ans)cout<<v<<' ';\n\tcout<<'\\n';\n\treturn 0;\n}",
  "1140":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\nconst ll MOD = 1000000007;\nconst int maxn = 200001;\nint n;\n\nint main(){\n\tfastio;\n\tcin>>n;\n\tvector<tuple<int, int ,ll>> arr(n);\n\tfor (int i=0; i<n; ++i) {\n\t\tcin>>get<1>(arr[i])>>get<0>(arr[i])>>get<2>(arr[i]);\n\t}\n\tsort(arr.begin(),arr.end());\n\n\tvector <pair<int, ll>> sav;\n\tsav.push_back({0,0LL});\n\tfor (int i=0; i<n; ++i) {\n\t\tauto it = lower_bound(sav.begin(),sav.end(),make_pair(get<1>(arr[i]),-1LL));\n\t\tpair<int,ll> nxt = {get<0>(arr[i]),get<2>(arr[i])};\n\t\tif (it!=sav.begin()) nxt.second+=prev(it)->second;\n\t\tnxt.second=max(nxt.second,sav.back().second);\n\t\tsav.push_back(nxt);\n\t}\n\tcout<<sav.back().second<<'\\n';\n\treturn 0;\n}",
  "1141":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\n\r\nint main(){\r\n\tfastio;\r\n\tint n;cin>>n;\r\n\tunordered_map <int,int> s;\r\n\ts.reserve(2e5);\r\n\tint re=0,temp,c=1,i=1;\r\n\tfor(;i<=n;i++){\r\n\t\tcin>>temp;\r\n\t\tif (s[temp] && s[temp]>=c){\r\n\t\t\tre=max(i-c,re);\r\n\t\t\tc=s[temp]+1;\r\n\t\t}\r\n\t\ts[temp]=i;\r\n\t}\r\n\tre=max(i-c,re);\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1143":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nint n,m;\nvector<int> a;\nvector<int> st;\nvoid buildTree(int v,int tl, int tr){\n\tif (tl==tr){\n\t\tst[v]=a[tl];\n\t}\n\telse{\n\t\tint mid = (tl+tr)>>1;\n\t\tbuildTree(v*2,tl,mid);\n\t\tbuildTree(v*2+1,mid+1,tr);\n\t\tst[v]=max(st[v*2],st[v*2+1]);\n\t}\n}\nint get(int v,int l, int r, int tl, int tr){\n\tif (l==tl&&r==tr){\n\t\treturn st[v];\n\t}\n\tif (l>r) return -1;\n\tint mid=(tl+tr)>>1;\n\treturn max(get(v*2,l,min(mid,r),tl,mid),get(v*2+1,max(l,mid+1),r,mid+1,tr));\n}\nvoid update(int v,int tl, int tr, int val,int pos){\n\tif (tl==tr){\n\t\tst[v]=val;\n\t\treturn;\n\t}\n\tint mid=(tl+tr)>>1;\n\tif (pos<=mid) update(v*2,tl,mid,val,pos);\n\telse update(v*2+1,mid+1,tr,val,pos);\n\tst[v]=max(st[v*2],st[v*2+1]);\n}\n\nint getPos(int tg){\n\tif (st[1]<tg) return 0;\n\tint l=0,r=n-1;\n\twhile (l<=r){\n\t\tint mid = (l+r)>>1;\n\t\tint mx=get(1,0,mid,0,n-1);\n\t\tif (mx>=tg) {\n\t\t\tr=mid-1;\n\t\t}\n\t\telse {\n\t\t\tl=mid+1;\n\t\t}\n\t}\n\tint nval=get(1,0,l,0,n-1)-tg;\n\tassert(nval>=0);\n\tupdate(1,0,n-1,nval,l);\n\treturn l+1;\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>m;\n\ta.assign(n,0);\n\tst.assign(4*n,0);\n\tfor (int i=0;i<n;++i) {\n\t\tcin>>a[i];\n\t}\n\tbuildTree(1,0,n-1);\n\tfor (int i=0;i<m;++i){\n\t\tint r;cin>>r;\n\t\tcout<<getPos(r)<<' ';\n\t}\n\treturn 0;\n}\n//  2 3 4 2 1 8",
  "1144":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n#include <ext/pb_ds/assoc_container.hpp> \n#include <ext/pb_ds/tree_policy.hpp> \nusing namespace __gnu_pbds; \n#define ordered_set tree<array<int,2>, null_type,less<array<int,2>>, rb_tree_tag,tree_order_statistics_node_update> \n\nint n,q;\nvector<int> v;\nordered_set s;\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tv.assign(n,0);\n\tfor (int i=0;i<n;++i) {\n\t\tcin>>v[i];\n\t\ts.insert({v[i],i});\n\t}\n\tfor (int i=0;i<q;++i){\n\t\tchar t;cin>>t;\n\t\tif (t=='?'){\n\t\t\tint x,y;cin>>x>>y;\n\t\t\tauto e=s.upper_bound({y+1,-1});\n\t\t\tauto b=s.upper_bound({x,-1});\n\t\t\tint ePos=n;\n\t\t\tif (e!=s.end()) ePos=s.order_of_key((*e));\n\t\t\tcout<<ePos - (int)s.order_of_key(*b)<<'\\n';\n\t\t}\n\t\telse {\n\t\t\tassert(t=='!');\n\t\t\tint x,y;cin>>x>>y;--x;\n\t\t\tauto it=s.find({v[x],x});\n\t\t\tassert(it!=s.end());\n\t\t\ts.erase(it);\n\t\t\tv[x]=y;\n\t\t\ts.insert({v[x],x});\n\t\t}\n\t}\n\treturn 0;\n}\n",
  "1145":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nint main(){\n\tint n;\n\tcin>>n;\n\tvector<int> arr(n);\n\tfor (int&v:arr)cin>>v;\n\n\tvector<int> lastNum;\n\tfor (int i=0;i<n;++i) {\n\t\tauto it = lower_bound(lastNum.begin(),lastNum.end(),arr[i]);\n\t\tif (it!=lastNum.end()){\n\t\t\t*it=arr[i];\n\t\t}\n\t\telse {\n\t\t\tlastNum.push_back(arr[i]);\n\t\t}\n\t}\n\tcout<<lastNum.size()<<'\\n';\n}",
  "1146":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nint main(){\n\tll n;\n\tcin>>n;\n\tll cur=1,re=0;\n\twhile (cur<=n){\n\t\tll x=n-(cur-1);\n\t\tre+=x/(cur<<1)*cur+min(x%(cur<<1),cur);\n\t\tcur<<=1;\n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}\n\n// 000\n// 001\n// 010\n// 011\n// 100\n// 101\n// 110\n// 111\n",
  "1158":
    '# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n# define MOD 1000000007\n# define ten6 1000002\nusing namespace std;\nint n, X;\nvector<pair<int,int>> book,book2;\nvector<vector<int>> dp;\n\nint getMax(int money, int idx) {\n    if (idx>=n||money<=0) return 0;\n    if(dp[money][idx]>=0) return dp[money][idx];\n    if (money>=book2[idx].first) return dp[money][idx]=book2[idx].second;\n    if (book[idx].first>money) return dp[money][idx]=getMax(money,idx+1);\n    return dp[money][idx]=max(book[idx].second+getMax(money-book[idx].first,idx+1),getMax(money,idx+1));\n}\n\nbool comp(pair<int,int> x,pair<int,int> y) {\n    double f=1.0/x.first*x.second;\n    double s= 1.0/y.first*y.second;\n    return f==s&&x>y||f<s;\n}\n\nint main()\n{\n    // freopen("test_input.txt","r",stdin);\n    // auto start=chrono::high_resolution_clock::now();\n\n    fastio;\n    cin>>n>>X;\n    dp.assign(X+1,vector<int>(n,-1));\n    book.assign(n,pair<int,int>());\n    for (int i=0;i<n;++i) cin>>book[i].first;\n    for (int i=0;i<n;++i) cin>>book[i].second;\n    sort(book.begin(),book.end(),comp);\n    book2.assign(n+1,pair<int,int>());\n    int s=-1;\n    for (int i=n-1;i>=0;--i) {\n        book2[i].first=book2[i+1].first+book[i].first;\n        book2[i].second=book2[i+1].second+book[i].second;\n        if (s==-1&&book2[i].first>X){\n            s=max(i-30,0);\n        }\n    }\n    s=max(s,0);\n    cout<<getMax(X,s)<<\'\\n\';\n \n    // auto end=chrono::high_resolution_clock::now();\n    // cout<<"Time elapsed: "<<chrono::duration_cast<chrono::milliseconds>(end-start).count()<<endl;\n    return 0;\n}',
  "1160":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nint n,m,timer,timer1;\nvector<int> p,tin,tout;\nvector<array<int,3>> idx;\nvector<vector<int>> l,up,adjList;\n\nvoid genLine(int x){\n\tvector<int> v;\n\twhile (idx[x][0]>0){\n\t\tv.push_back(x);\n\t\tidx[x][0]=-2;\n\t\tx=p[x];\n\t}\n\tif (idx[x][0]!=0) x=-1;\n \treverse(v.begin(),v.end());\n \tfor (int& c:v){\n \t\tif (p[c]!=x) adjList[p[c]].push_back(c);\n \t\telse adjList[l[idx[x][1]][0]].push_back(c);\n \t}\n\n}\n\nvoid genCycle(int x){\n\tint pos=l.size();\n\tint turtle=p[x], rabbit=p[p[x]];\n\twhile (turtle!=rabbit){\n\t\tturtle=p[turtle];\n\t\trabbit=p[p[rabbit]];\n\t}\n\tint y=x;\n\t\n\twhile (y!=turtle){\n\t\ty=p[y];\n\t\tturtle=p[turtle];\n\t}\n\n\tl.push_back({y});\n\tvector<int> &cycle=l[pos];\n\tidx[y]={0,pos,0};\n\tint y1=p[y];\n\tint tmp=1;\n\twhile (y1!=y) {\n\t\tidx[y1]={0,pos,tmp++};\n\t\tcycle.push_back(y1);\n\t\ty1=p[y1];\n\t}\n\n \tgenLine(x);\n}\n\nvoid merge(int x){\n\tidx[x][0]=timer;\n\tint tmp=p[x];\n\twhile (idx[tmp][0]==-1){\n\t\tidx[tmp][0]=timer;\n\t\ttmp=p[tmp];\n\t}\n\tint a=idx[tmp][0];\n\tif (a==timer) genCycle(x);\n\telse genLine(x);\n\t++timer;\n}\n\nvoid dfs(int x,int pre){\n\ttin[x]=timer1++;\n\tup[x][0]=pre;\n\tfor (int i=1;i<20;++i)\n\t\tup[x][i]=up[up[x][i-1]][i-1];\n\n\tfor (int &c:adjList[x])\tdfs(c,x);\n\ttout[x]=timer1++;\n}\n\nbool is_ancestor(int x,int y){\n\treturn tin[x]<=tin[y]&&tout[x]>=tout[y];\n}\n\nint get(int x, int y){\n\tif (x==y) return 0;\n\tint re=0;\n\tint &a=idx[x][0],&b=idx[x][1],&c=idx[x][2];\n\tif (a==0){\n\t\tif (idx[y][0]==0&&b==idx[y][1]) {\n\t\t\tre=idx[y][2]-c;\n\t\t\tif (re<0) re+=l[b].size();\n\t\t\treturn re;\n\t\t}\n\t\treturn -1;\n\t}\n\tint y1=y;\n\tif (idx[y][0]==0) y=l[idx[y][1]][0];\n\tif (!is_ancestor(y,x)) return -1;\n\tfor (int i=19;i>=0;--i){\n\t\tif (is_ancestor(up[x][i],y))continue;\n\t\tx=up[x][i];\n\t\tre+=(1<<i);\n\t}\n\tx=p[x];\n\t++re;\n\tif (x!=y1)  return re+get(x,y1);\n\treturn re;\n}\n\nvoid solve(){\n\tidx.assign(n,{-1,-1,-1});\n\tup.assign(n,vector<int>(20,-1));\n\tadjList.assign(n,vector<int>());\n\ttin.assign(n,-1);\n\ttout.assign(n,-1);\n\ttimer=timer1=1;\n\tfor (int i=0;i<n;++i){\n\t\tif (idx[i][0]==-1) merge(i);\n\t}\n\tfor (int i=0;i<n;++i){\n\t\tif (idx[i][0]==0&&idx[i][2]==0) dfs(i,i);\n\t}\n\tfor (int i=0;i<m;++i){\n\t\tint x,y;\n\t\tcin>>x>>y;\n\t\tcout<<get(x-1,y-1)<<'\\n';\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tp.assign(n,-1);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>p[i];\n\t\t--p[i];\n\t}\n\tsolve();\n\treturn 0;\n}",
  "1163":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL)\r\nusing namespace std;\r\nbool comp(int x,int y){\r\n\treturn x>y;\r\n}\r\nint main(){\r\n\tfastio;\r\n\tint x,n,tmp;cin>>x>>n;\r\n\tmap <int,int> s;\r\n\tcin>>tmp;\r\n\tset <int> m={0,tmp,x};\r\n\ts[x-tmp]++;s[tmp]++;\r\n\tcout<<(*s.rbegin()).first;\r\n\tfor (int i=1;i<n;i++){\r\n\t\tcin>>tmp;\r\n\t\tauto it2=m.upper_bound(tmp);\r\n\t\tauto it=it2--;\r\n\t\tint olddis=*it-*it2;\r\n\t\tauto sit=s.find(olddis);\r\n\t\t--(*sit).second;\r\n\t\tif ((*sit).second==0) s.erase(sit);\r\n\t\ts[*it-tmp]++;s[tmp-*it2]++;\r\n\t\tm.insert(tmp);\r\n\t\tcout<<' '<<(*s.rbegin()).first;\r\n\t}\r\n\tcout<<'\\n';\r\n\treturn 0;\r\n}",
  "1164":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL)\r\nusing namespace std;\r\nbool comp(int x,int y){\r\n\treturn x>y;\r\n}\r\nint main(){\r\n\tfastio;\r\n\tint n,tmp;cin>>n;\r\n\tvector <pair<pair<int,int>,int>> a(2*n);\r\n\tvector <int> re(n);\r\n\tfor (int i=0;i<2*n;i+=2){\r\n\t\tcin>>a[i].first.first>>a[i+1].first.first;\r\n\t\ta[i].first.second=-1;a[i+1].first.second=1;\r\n\t\ta[i].second=a[i+1].second=i/2;\r\n\t}\r\n\tsort(all(a));\r\n\tint num=1,roomid;\r\n\tset <int> remainRooms;\r\n\tfor (auto v:a){\r\n\t\ttmp=v.first.second;\r\n\t\troomid=v.second;\r\n\t\tif (tmp==-1) {\r\n\t\t\tif (remainRooms.size()>0) {\r\n\t\t\t\tre[roomid]=*remainRooms.begin();\r\n\t\t\t\tremainRooms.erase(remainRooms.begin());\r\n\t\t\t}\r\n\t\t\telse re[roomid]=num++;\r\n\t\t}\r\n\t\telse{\r\n\t\t\tremainRooms.insert(re[roomid]);\r\n\t\t}\r\n\t}\r\n\tcout<<num-1<<'\\n';\r\n\tcout<<re[0];\r\n\tfor (int i=1;i<n;i++)cout<<' '<<re[i];\r\n\tcout<<'\\n';\r\n\treturn 0;\r\n}",
  "1190":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nstruct Node{\n\tll s;\n\tll pre;\n\tll suf;\n\tll re;\n};\n\nvector<Node> st;\nvector<ll> a;\nint n,q;\n\nvoid buildTree(int v,int tl, int tr){\n\tif (tl==tr){\n\t\tst[v].s=st[v].pre=st[v].suf=st[v].re=a[tl];\n\t\treturn;\n\t}\n\tint mid = (tl+tr)>>1;\n\tbuildTree(v*2,tl,mid);\n\tbuildTree(v*2+1,mid+1,tr);\n\tst[v].s=st[v*2].s+st[v*2+1].s;\n\tst[v].pre=max(st[v*2].pre,st[v*2].s+st[v*2+1].pre);\n\tst[v].suf=max(st[v*2+1].suf,st[v*2+1].s+st[v*2].suf);\n\tst[v].re=max(max(st[v*2].re,st[v*2+1].re),st[v*2].suf+st[v*2+1].pre);\n}\n\nvoid update(int v,int tl, int tr,int pos,ll val){\n\tif (tl==tr){\n\t\tst[v].s=st[v].pre=st[v].suf=st[v].re=val;\n\t}\n\telse {\n\t\tint mid =(tl+tr)>>1;\n\t\tif (pos<=mid) update(v*2,tl,mid,pos,val);\n\t\telse update(v*2+1,mid+1,tr,pos,val);\n\t\tst[v].s=st[v*2].s+st[v*2+1].s;\n\t\tst[v].pre=max(st[v*2].pre,st[v*2].s+st[v*2+1].pre);\n\t\tst[v].suf=max(st[v*2+1].suf,st[v*2+1].s+st[v*2].suf);\n\t\tst[v].re=max(max(st[v*2].re,st[v*2+1].re),st[v*2].suf+st[v*2+1].pre);\t\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\ta.assign(n,0);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>a[i];\n\t}\n\tst.assign(4*n,Node({0,0,0,0}));\n\tbuildTree(1,0,n-1);\n\tfor (int i=0;i<q;++i){\n\t\tll x,y;cin>>x>>y;--x;\n\t\tupdate(1,0,n-1,x,y);\n\t\tcout<<max(st[1].re,0LL)<<'\\n';\n\t}\n\treturn 0;\n}",
  "1192":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nvector<string> mp;\r\nvector <vector<bool>> vst;\r\n\r\nint n,m;\r\nint dirx[]={-1,1,0,0};\r\nint diry[]={0,0,-1,1};\r\nvoid dfs(int u,int v){\r\n\tif (u<0||u>=n||v<0||v>=m) return;\r\n\tif (vst[u][v]||mp[u][v]=='#')return;\r\n\tvst[u][v]=true;\r\n\tfor (int i=0;i<4;i++){\r\n\t\tdfs(u+dirx[i],v+diry[i]);\r\n\t}\r\n}\r\nint main(){\r\n\tfastio;\r\n\tcin>>n>>m;\r\n\tmp.assign(n,\"\");\r\n\tvst.assign(n,vector<bool>(m,false));\r\n\tint re=0;\r\n\tfor (int i=0;i<n;i++)cin>>mp[i];\r\n\tfor (int i=0;i<n;i++){\r\n\t\tfor(int j=0;j<m;j++)\r\n\t\t\tif (mp[i][j]=='.'&&!vst[i][j]){\r\n\t\t\t\tdfs(i,j);\r\n\t\t\t\tre++;\r\n\t\t\t}\r\n\t}\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1193":
    "#include <bits/stdc++.h>\n#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n#define ll long long\nusing namespace std;\n\nvector<string> s;\nint n,m;\nint dirx[]={-1,1,0,0};\nint diry[]={0,0,-1,1};\nchar dir[]={'U','D','L','R'};\n\nbool bfs(pair<int,int> curr,vector<pair<int,char>> & path){\n    queue<pair<int,int>> q;\n    q.push(curr);\n    s[curr.first][curr.second]='#';\n    while (!q.empty()){\n        curr=q.front();\n        q.pop();\n        for (int i=0;i<4;++i){\n            pair<int,int>nxt={curr.first+dirx[i],curr.second+diry[i]};\n            if (nxt.first>=n||nxt.first<0||nxt.second>=m||nxt.second<0) continue;\n            if (s[nxt.first][nxt.second]=='#') continue;\n            path[nxt.first*m+nxt.second]={curr.first*m+curr.second,dir[i]};\n            if (s[nxt.first][nxt.second]=='B') return true;\n            q.push(nxt);\n            s[nxt.first][nxt.second]='#';\n        }\n    }\n    return false;\n}\n\nvoid solve(){\n    cin>>n>>m;\n    s.assign(n,\"\");\n    pair<int,int>A,B;\n    for (int i=0;i<n;++i) {\n        cin>>s[i];\n        for (int j=0;j<m;++j){\n            if (s[i][j]=='A') A={i,j};\n            if (s[i][j]=='B') B={i,j};\n        }\n    }\n    vector<pair<int,char>> path(n*m);\n\n    if (bfs(A,path)) {\n        cout<<\"YES\\n\";\n        string pathTo;\n        while (B!=A) {\n            auto p = path[B.first*m+B.second];\n            pathTo.push_back(p.second);\n            B={p.first/m,p.first%m};\n        }\n        reverse(pathTo.begin(),pathTo.end());\n        cout<<pathTo.size()<<'\\n';\n        cout<<pathTo<<'\\n';\n    }\n    else{\n        cout<<\"NO\\n\";\n    }\n}\n\n\nint main()\n{\n    // fastio;\n    solve();\n\treturn 0;\n}\n\n",
  "1194":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\nll MOD = 1000000007;\n\nvector <string> mat;\nqueue <pair<int,int>> mons;\nqueue <pair<int,int>> you;\nvector<vector<int>> dMons;\nvector<vector<int>> dYou;\nvector<vector<int>> path;\nint n,m;\n\nint dirx[] = {-1,1,0,0};\nint diry[] = {0,0,-1,1};\nchar dirName[] = {'U','D','L','R'};\nbool isExit(int x, int y) {\n\treturn x==0||y==0||x==n-1||y==m-1;\n}\n\nvoid printPath(int x,int y){\n\tstring p;\n\twhile (dYou[x][y]!=0){\n\t\tint i=path[x][y];\n\t\tp.push_back(dirName[i]);\n\t\tx-=dirx[i];y-=diry[i];\n\t}\n\treverse(p.begin(),p.end());\n\tcout<<p<<'\\n';\n}\n\nvoid solve(){\n\twhile (!mons.empty()) {\n\t\tauto v=mons.front();\n\t\tmons.pop();\n\t\t\n\t\tfor (int i=0;i<4;++i){\n\t\t\tint newx=v.first+dirx[i], newy=v.second+diry[i];\n\t\t\tif (newx>=n||newx<0||newy>=m||newy<0) continue;\n\t\t\tif (mat[newx][newy]=='#') continue;\n\t\t\tif (dMons[newx][newy]!=MOD) continue;\n\t\t\tdMons[newx][newy] = dMons[v.first][v.second]+1;\n\t\t\tmons.push(make_pair(newx,newy));\n\t\t}\n\t}\n\n\tpath=dYou;\n\twhile (!you.empty()){\n\t\tauto v = you.front();\n\t\tyou.pop();\n\t\t\n\t\tif (isExit(v.first,v.second)&&dYou[v.first][v.second] < dMons[v.first][v.second]) {\n\t\t\tcout<<\"YES\\n\";\n\t\t\tcout<<dYou[v.first][v.second]<<'\\n';\n\t\t\tprintPath(v.first,v.second);\n\t\t\treturn;\n\t\t}\n\n\t\tfor (int i=0; i<4; ++i) {\n\t\t\tint newx=v.first+dirx[i], newy=v.second+diry[i];\n\t\t\tif (newx>=n||newx<0||newy>=m||newy<0) continue;\n\t\t\tif (mat[newx][newy]=='#') continue;\n\t\t\tif (dYou[newx][newy]!=MOD) continue;\n\t\t\tdYou[newx][newy] = dYou[v.first][v.second]+1;\n\t\t\tpath[newx][newy] = i;\n\t\t\tyou.push(make_pair(newx,newy));\n\t\t}\n\t}\n\tcout<<\"NO\\n\";\n}\n\nint main() {\n\tfastio;\n\tcin>>n>>m;\n\tmat.assign(n,\"\");\n\tdMons.assign(n,vector<int>(m,MOD));\n\tdYou.assign(n,vector<int>(m,MOD));\n\tfor (int i=0; i<n; ++i) {\n\t\tcin>>mat[i];\t\n\t\tfor (int j=0; j<m; ++j) {\n\t\t\tif (mat[i][j]=='M') {\n\t\t\t\tmons.push(make_pair(i,j));\n\t\t\t\tdMons[i][j]=0;\n\t\t\t}\n\t\t\telse if (mat[i][j]=='A') {\n\t\t\t\tyou.push(make_pair(i,j));\n\t\t\t\tdYou[i][j]=0;\n\t\t\t}\n\t\t}\n\t}\n\n\n\tsolve();\n\treturn 0;\n}",
  "1195":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nll INF = 1000000007;\nstruct edge{\n\tint to;\n\tll w;\n};\n\nvector <pair<ll,ll>> d;\nvector<vector<edge>>adjList;\nint n,m;\n\nll solve() {\n\tset <array<ll,3>> s;\n\ts.insert({0,0,0});\n\twhile (!s.empty()){\n\t\tint from=(*(s.begin()))[2];\n\t\ts.erase(s.begin());\n\t\tfor (edge &e:adjList[from]){\n\t\t\tbool flag=false;\n\t\t\tarray<ll,3> toDel={d[e.to].first,d[e.to].second,e.to};\n\t\t\tif (d[e.to].first>d[from].first+e.w){\n\t\t\t\tflag=true;\n\t\t\t\td[e.to].first=d[from].first+e.w;\n\t\t\t}\n\t\t\tif(d[e.to].second>min(d[from].first+e.w/2,d[from].second+e.w)){\n\t\t\t\tflag=true;\n\t\t\t\td[e.to].second=min(d[from].first+e.w/2,d[from].second+e.w);\n\t\t\t}\n\t\t\tif (flag){\n\t\t\t\ts.erase(toDel);\n\t\t\t\ts.insert({d[e.to].first,d[e.to].second,e.to});\n\t\t\t}\n\t\t}\n\t}\n\treturn d[n-1].second;\n}\n\nint main() {\n\tfastio;\n\tINF*=INF;\n\tcin>>n>>m;\n\td.assign(n,{INF,INF});\n\td[0]={0,0};\n\tadjList.assign(n,vector<edge>());\n\tfor (int i=0; i<m; ++i) {\n\t\tint a,b;\n\t\tll c;\n\t\tcin>>a>>b>>c;\n\t\t--a;--b;\n\t\tadjList[a].push_back(edge({b,c}));\n\t}\n\tcout<<solve()<<'\\n';\n\treturn 0;\n}",
  "1196":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nconst ll INF = 1e18;\nstruct edge{\n\tint to;\n\tll w;\n};\n\nvector<vector<edge>>adjList;\nint n,m,k;\n\nvoid solve() {\n\tmultiset <array<ll,2>> s;\n\tvector<multiset<ll>> D(n);\n\ts.insert({0,0});\n\tD[0].insert(0);\n\tfor (int i=0;i<n;++i) D[i].insert(INF);\n\twhile (!s.empty()){\n\t\tarray<ll,2> p=(*(s.begin()));\n\t\tint cur=p[1];\n\t\tll dfrom=p[0];\n\t\ts.erase(s.begin());\n\t\tfor (edge &e:adjList[cur]){\n\t\t\tif (*(prev(D[e.to].end()))>dfrom+e.w){\n\t\t\t\tif (D[e.to].size()==k) {\n\t\t\t\t\tll toDel=*prev(D[e.to].end());\n\t\t\t\t\tD[e.to].erase(prev(D[e.to].end()));\n\t\t\t\t\tif (toDel!=INF) s.erase(s.find({toDel,e.to}));\n\t\t\t\t}\n\t\t\t\tD[e.to].insert(dfrom+e.w);\n\t\t\t\ts.insert({dfrom+e.w,e.to});\n\t\t\t}\n\t\t}\n\t}\n\tfor(ll v:D[n-1]) cout<<v<<' ';\n}\n\nint main() {\n\tfastio;\n\tcin>>n>>m>>k;\n\tadjList.assign(n,vector<edge>());\n\tfor (int i=0; i<m; ++i) {\n\t\tint a,b;\n\t\tll c;\n\t\tcin>>a>>b>>c;\n\t\t--a;--b;\n\t\tadjList[a].push_back(edge({b,c}));\n\t}\n\tsolve();\n\treturn 0;\n}",
  "1197":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nconst ll INF = 1e18;\nstruct edge{\n\tint a,b;\n\tll w;\n};\n\nvector<edge> eL;\nvector<int> p;\nvector<ll> d;\nvector<bool> check;\nint n,m,x;\n\nbool solve(int root){\n\td.assign(n,INF);\n\td[root]=0;\n\tfor (int i=0;i<n;++i)\n\t{\t\n\t\tx=-1;\n\t\tfor (edge &e:eL){\n\t\t\tif (d[e.a]==INF) continue;\n\t\t\tif (d[e.b]>d[e.a]+e.w){\n\t\t\t\tx=e.b;\n\t\t\t\t::check[x]=true;\n\t\t\t\td[e.b]=d[e.a]+e.w;\n\t\t\t\tp[e.b]=e.a;\n\t\t\t}\n\t\t}\n\t\tif (x==-1) return false;\n\t}\n\treturn true;\n}\n\nint main(){\n\t// fastio;\n\tcin>>n>>m;\n\tp.assign(n,-1);\n\t::check.assign(n,false);\n\tfor (int i=0;i<m;++i){\n\t\tll a,b,c;\n\t\tcin>>a>>b>>c;\n\t\t--a;--b;\n\t\teL.push_back({a,b,c});\n\t}\n\tfor (int i=0;i<n;++i){\n\t\tif (::check[i]) continue;\n\t\tif (solve(i)){\n\t\t\tcout<<\"YES\\n\";\n\t\t\tvector<bool> check(n);\n\t\t\tvector<int> path;\n\t\t\twhile(true){\n\t\t\t\tif (check[x]) break;\n\t\t\t\tcheck[x]=true;\n\t\t\t\tx=p[x];\n\t\t\t}\n\t\t\tint y=p[x];\n\t\t\twhile(y!=x){\n\t\t\t\tpath.push_back(y);\n\t\t\t\ty=p[y];\n\t\t\t}\n\t\t\treverse(path.begin(),path.end());\n\t\t\tcout<<x+1;\n\t\t\tfor (int &v:path) cout<<' '<<v+1;\n\t\t\tcout<<' '<<x+1;\n\t\t\tcout<<'\\n';\n\t\t\treturn 0;\n\t\t}\n\t}\n\tcout<<\"NO\\n\";\n\treturn 0;\n}\n",
  "1202":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll INF=1e18;\nconst ll MOD=1000000007;\n\nstruct edge{\n\tint to;\n\tll w;\n};\nint n,m;\nvector<vector<edge>> adjList;\nvector<pair<ll,int>> d;\nint mn,mx;\n\nvoid solve(){\n\td[0]={0,1};\n\tset <pair<ll,int>> s;\n\tvector<pair<int,int>> dis(n,{-1,-1});\n\tdis[0]={0,0};\n\ts.insert({0,0});\n\twhile (!s.empty()) {\n\t\tauto p = *(s.begin());\n\t\ts.erase(s.begin());\n\t\tfor (edge &e:adjList[p.second]){\n\t\t\tll nw=p.first+e.w;\n\t\t\tif (d[e.to].first>nw) {\n\t\t\t\ts.erase({d[e.to].first,e.to});\n\t\t\t\td[e.to]={nw,d[p.second].second};\n\t\t\t\ts.insert({d[e.to].first,e.to});\n\t\t\t\t\n\t\t\t\tauto disFrom=dis[p.second];\t\t\t\t\n\t\t\t\tdis[e.to]={disFrom.first+1,disFrom.second+1};\n\t\t\t}\n\t\t\telse if (d[e.to].first==nw) {\n\t\t\t\td[e.to].second=(d[e.to].second+d[p.second].second)%MOD;\n\t\t\t\tauto disFrom=dis[p.second];\t\t\t\t\n\t\t\t\tdis[e.to]={min(disFrom.first+1,dis[e.to].first),max(disFrom.second+1,dis[e.to].second)};\n\t\t\t}\n\t\t}\n\t}\n\tmn=dis[n-1].first;mx=dis[n-1].second;\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tadjList.assign(n,vector<edge>());\n\td.assign(n,{INF,1});\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;ll c;\n\t\tcin>>a>>b>>c;--a;--b;\n\t\tadjList[a].push_back(edge({b,c}));\n\t}\n\tsolve();\n\tcout<<d[n-1].first<<' '<<d[n-1].second<<' '<<mn<<' '<<mx<<'\\n';\n\treturn 0;\n}",
  "1617":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\nusing namespace std;\r\nll md=1000000007;\r\nll expo (ll m, int e){\r\n\tif(!e) return 1;\r\n\tm%=md;\r\n\tif (e&1) return (m*expo(m*m,e>>1))%md;\r\n\treturn (expo(m*m,e>>1))%md;\t\r\n}\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint e;\r\n\tcin>>e;\r\n\tcout<<expo(2,e)<<endl;\r\n\treturn 0;\r\n}",
  "1618":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\nusing namespace std;\r\nll md=1000000007;\r\nll num5(int n){\r\n\tll re=0;\r\n\twhile (n){\r\n\t\tn/=5;\r\n\t\tre+=n;\r\n\t}\r\n\treturn re;\r\n}\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint e;\r\n\tcin>>e;\r\n\tcout<<num5(e)<<endl;\r\n\treturn 0;\r\n}",
  "1619":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<b;i++)\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n;\r\n\tcin>>n;\r\n\tvector<pair<int,int>>a;\r\n\tint temp;\r\n\tREP(i,0,n) {\r\n\t\tcin>>temp;a.push_back({temp,1});\r\n\t\tcin>>temp;a.push_back({temp,-1});\r\n\t}\r\n\tsort(all(a));\r\n\tint re=0, c=0;\r\n\tfor (auto p:a){\r\n\t\tc+=p.second;\r\n\t\tre=max(re,c);\r\n\t}\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1620":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n,t;\r\n\tcin>>n>>t;\r\n\tdouble s=0;\r\n\tvector <int> arr(n);\r\n\tfor (int i=0;i<n;i++){\r\n\t\tcin>>arr[i];\r\n\t\ts+=1.0/arr[i];\r\n\t}\r\n\tlong long base=(double)t/s;\r\n\tlong long curr=0;\r\n\tmultiset <pair<int,int>> rem;\r\n\tfor (int i=0;i<n;i++){\r\n\t\tcurr+=base/arr[i];\r\n\t\trem.insert({arr[i]-base%arr[i],arr[i]});\r\n\t}\r\n\tlong long re=base;\r\n\tpair<int,int> tmp={0,0};\r\n\tfor(;curr<t;curr++){\r\n\t\ttmp=(*(rem.begin()));\r\n\t\trem.insert({tmp.first+tmp.second,tmp.second});\r\n\t\trem.erase(rem.begin());\r\n\t}\r\n\tre+=tmp.first;\r\n\tcout<<re<<'\\n';\r\n\treturn 0;\r\n}",
  "1621":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<=b;i++)\r\nusing namespace std;\r\nvector <int> a(int(2e5)+10);\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint t;\r\n\tcin>>t;\r\n\tREP(i,0,t-1) cin>>a[i];\r\n\tsort(a.begin(),a.begin()+t);\r\n\tvector<int>::iterator it=unique(a.begin(),a.begin()+t);\r\n\tcout<<it-a.begin()<<endl;\r\n\treturn 0;\r\n}",
  "1622":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\nusing namespace std;\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tstring s;\r\n\tint k=1;\r\n\tunordered_map <char,int> m;\r\n\tcin>>s;\r\n\tfor (int i=1;i<=s.size();i++)k*=i;\r\n\tfor (auto c:s) m[c]++;\r\n\tfor (auto p:m){for(int i=2;i<=p.second;i++)k/=i;}\r\n\tsort(all(s));\r\n\tcout<<k<<endl;\r\n\tdo{\r\n\t\tcout<<s<<endl;\r\n\t}\r\n\twhile (next_permutation(all(s)));\r\n\treturn 0;\r\n}",
  "1623":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\nusing namespace std;\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint n;\r\n\tll re=INFINITY;\r\n\tll su=0;\r\n\tcin>>n;\r\n\tvector <ll> p (n);\r\n\tfor(int i=0;i<n;i++){cin>>p[i];su+=p[i];}\r\n\tfor (int i =1;i<1<<n;i++){\r\n\t\tll t=0;\r\n\t\tfor (int j=1;1<<j<=i;j++)if((1<<j)&i) t+=p[j];\r\n\t\tre=min(re,abs(2*t-su));\r\n\t}\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1624":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<=b;i++)\r\nusing namespace std;\r\nbool board [8][8];\r\nint c=0;\r\n\r\nclass {\r\n\tbool col[8]{0};\r\n\tbool diagl[15]{0};\r\n\tbool diagr[15]{0};\r\n\tint toDiagL(int r, int c){\r\n\t\treturn r-c+7;\r\n\t}\r\n\tint toDiagR(int r, int c){\r\n\t\treturn r+c;\r\n\t}\r\npublic:\r\n\tbool checkAll(int r, int c){\r\n\t\treturn !(col[c] || diagl[toDiagL(r,c)]||diagr[toDiagR(r,c)]);\r\n\t}\r\n\tvoid setAll(int r, int c){\r\n\t\tcol[c]=diagl[toDiagL(r,c)]=diagr[toDiagR(r,c)]=1;\r\n\t}\r\n\tvoid resetAll(int r, int c){\r\n\t\tcol[c]=diagl[toDiagL(r,c)]=diagr[toDiagR(r,c)]=0;\r\n\t}\t\r\n} check;\r\nvoid recu(int r){\r\n\tif (r==8) c++;\r\n\telse{\r\n\t\tREP(i,0,7){\r\n\t\t\tif (board[r][i]) continue;\r\n\t\t\tif (!check.checkAll(r,i)) continue;\r\n\t\t\tcheck.setAll(r,i);\r\n\t\t\trecu(r+1);\r\n\t\t\tcheck.resetAll(r,i);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tstring s;\r\n\tREP (i,0,7){\r\n\t\tcin>>s;\r\n\t\tREP(j,0,7)\r\n\t\t{\r\n\t\t\tif (s[j]=='.') board[i][j]=0;\r\n\t\t\telse board[i][j]=1;\r\n\t\t}\r\n\t}\r\n\trecu(0);\r\n\tcout<<c<<endl;\r\n\treturn 0;\r\n}",
  "1625":
    "#include <bits/stdc++.h>\n#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n#define ll long long\n#define MOD 1000000007;\nusing namespace std;\n\n\n\nvoid solve(){\n    int n;\n    cin>>n;\n    vector<vector<ll>> dp(n+1,vector<ll>(n+1));\n    vector<string>s(n);\n    for (int i=0;i<n;++i) cin>>s[i];\n    dp[1][1]=1;\n    for (int i=1;i<=n;++i){\n        for (int j=1;j<=n;++j){\n            dp[i][j]=(dp[i][j]+dp[i-1][j]+dp[i][j-1])%MOD;\n            if (s[i-1][j-1]=='*') dp[i][j]=0;\n        }\n    }\n    cout<<dp[n][n]<<'\\n';\n}\n\nint main()\n{\n    fastio;\n    solve();\n\treturn 0;\n}\n\n",
  "1628":
    '#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nint main(){\n\tint n;\n\tll x;\n\tcin>>n>>x;\n\tvector<int>a(n);\n\tfor (int&v:a)cin>>v;\n\tvector<ll>s1,s2;\n\tint sz1=n/2,sz2=n-sz1;\n\tfor (int i=(1<<sz1)-1;i>=0;--i){\n\t\tll s=0;\n\t\tfor (int j=0;i>=(1<<j);++j){\n\t\t\tif (i&(1<<j)) s+=a[j];\n\t\t}\n\t\t// cout<<"s1: "<<s<<endl;\n\t\ts1.push_back(s);\n\t}\n\tfor (int i=(1<<sz2)-1;i>=0;--i){\n\t\tll s=0;\n\t\tfor (int j=0;i>=(1<<j);++j){\n\t\t\tif (i&(1<<j)) s+=a[sz1+j];\n\t\t}\n\t\t// cout<<"s2: "<<s<<endl;\n\t\ts2.push_back(s);\n\t}\n\tsort(s2.begin(),s2.end());\n\tll re=0;\n\tfor (ll &v:s1){\n\t\tll tg = x-v;\n\t\tre+=upper_bound(s2.begin(),s2.end(),tg)-lower_bound(s2.begin(),s2.end(),tg);\n\t}\n\tcout<<re<<\'\\n\';\n\treturn 0;\n}',
  "1629":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<b;i++)\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n;\r\n\tcin>>n;\r\n\tvector<pair<int,int>>a(n);\r\n\tREP(i,0,n) cin>>a[i].second>>a[i].first;\r\n\tsort(all(a));\r\n\tint re=1, end=a[0].first;\r\n\tREP(i,1,n){\r\n\t\tif (a[i].second>=end){\r\n\t\t\tre++;end=a[i].first;\r\n\t\t}\r\n\t}\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1630":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tll re=0;\r\n\tint n,tmp;\r\n\tcin>>n;\r\n\tvector <int> a(n);\r\n\tfor (int i=0;i<n;i++){\r\n\t\tcin>>a[i]>>tmp;\r\n\t\tre+=tmp;\r\n\t}\r\n\tsort(all(a));\r\n\tfor(ll i=0;i<n;i++)re-=(n-i)*a[i];\r\n\tcout<<re<<'\\n';\r\n\treturn 0;\r\n}",
  "1631":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tll re=0;\r\n\tint n,tmp,m=0;\r\n\tcin>>n;\r\n\tfor (int i=0;i<n;i++){\r\n\t\tcin>>tmp;\r\n\t\tm=max(m,tmp);\r\n\t\tre+=tmp;\r\n\t}\r\n\tm<<=1;\r\n\tif (n==1 || re<m) re=m;\r\n\tcout<<re<<'\\n';\r\n\treturn 0;\r\n}",
  "1632":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    fastio;\r\n    int n,k;\r\n    cin>>n>>k;\r\n    vector <pair<int,int>> a(n);\r\n    for (int i=0;i<n;i++) cin>>a[i].second>>a[i].first;\r\n    sort(all(a));\r\n    vector <pair<int,pair<bool,int>>>b(2*n);\r\n    for (int i=0;i<n;i++){\r\n        b[i*2]={a[i].second,{true,i}};\r\n        b[i*2+1]={a[i].first,{false,i}};\r\n    }\r\n    sort(all(b));\r\n    int ans=0;\r\n    set <int> s;\r\n    for (auto v: b){\r\n        int x,isBeg,pos;\r\n        x=v.first;isBeg=v.second.first;pos=v.second.second;\r\n        if(isBeg) s.insert(pos);\r\n        else {\r\n            set<int>::iterator it;\r\n            it=s.find(pos);\r\n            if (it!=s.end()) {\r\n              ans++;\r\n              s.erase(it);  \r\n            }\r\n        }\r\n        if (s.size()>k) s.erase(prev(s.end()));\r\n    }\r\n    cout<<ans<<'\\n';\r\n    return 0;\r\n}",
  "1633":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nint n;\r\nll dp [(int)(1e6+1.5)]{0};\r\nint main(){\r\n\tfastio;\r\n\tcin>>n;\r\n\tfor (int i=0;i<=6;i++)dp[i]=1;\r\n\tfor (int i=2;i<=n;i++){\r\n\t\tfor (int j=min(6,i-1);j>=1;--j){\r\n\t\t\t\tdp[i]=(dp[i]+dp[i-j])%MOD;\r\n\t\t}\r\n\t}\r\n\tcout<<dp[n]<<'\\n';\r\n\treturn 0;\r\n}",
  "1634":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\n# define ten6 (1e6+1.5)\r\nusing namespace std;\r\n\r\nll dp [(int)ten6]{0};\r\nvector <int> c;\r\nll solve (int x){\r\n    if (x==0) return 0;\r\n    if (dp[x]) return dp[x];\r\n    ll re=ten6;\r\n    for (auto v:c) {\r\n        if (v>x) continue;\r\n        re=min(re,1+solve(x-v));\r\n    }\r\n    return dp[x]=re;\r\n}\r\n\r\nint main()\r\n{\r\n    fastio;\r\n    int n,x;\r\n    cin>>n>>x;\r\n    c.assign(n,0);\r\n    for (auto &v:c){\r\n        cin>>v;\r\n        dp[v]=1;\r\n    }\r\n    ll re=solve(x);\r\n    if (re<(ll)(ten6))\r\n    cout<<solve(x)<<'\\n';\r\n    else cout<<-1<<'\\n';\r\n    return 0;    \r\n}",
  "1635":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n# define MOD 1000000007\n# define ten6 1000002\nusing namespace std;\n \nll dp[ten6]={0};\nint main()\n{\n    fastio;\n    int n, k;\n    cin>>n>>k;\n    vector<int>lsCoins(n);\n    for (int i=0;i<n;i++) cin>>lsCoins[i];\n    dp[0]=1;\n    for (int target=1;target<=k;target++){\n        for (int v:lsCoins){\n            if (target>=v)\n            dp[target]=(dp[target]+dp[target-v])%MOD;\n        }\n    }\n    cout<<dp[k]<<'\\n';\n      return 0;\n}",
  "1636":
    '# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\n# define MOD 1000000007\r\n# define ten6 1000002\r\n\r\nusing namespace std;\r\nvector <int> dp;\r\nint n;\r\nint lsCoins[101];\r\nint main()\r\n{\r\n    // auto start=chrono::high_resolution_clock::now();\r\n    fastio;\r\n    int x;\r\n    cin>>n>>x;\r\n    dp.assign(x+1,0);\r\n    for (int i=0;i<n;i++)  cin>>lsCoins[i];\r\n    dp[0]=1;\r\n    sort(lsCoins,lsCoins+n);\r\n    for (int pos =0;pos<n;pos++)\r\n    for (int target=lsCoins[pos];target<=x;target++){\r\n        dp[target]=(dp[target]+dp[target-lsCoins[pos]])%MOD;\r\n    }\r\n    cout<<dp[x]<<\'\\n\';\r\n    // auto stop=chrono::high_resolution_clock::now();\r\n    // cout<<"Took: "<<chrono::duration_cast<chrono::milliseconds>(stop-start).count()<<" ms\\n";\r\n    return 0;\r\n}',
  "1637":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\n# define MOD 1000000007\r\n# define ten6 1000002\r\n\r\nusing namespace std;\r\nint main()\r\n{\r\n    fastio;\r\n    int x;\r\n    cin>>x;\r\n    vector <int> ten (7);\r\n    ten[0]=1;\r\n    int mxDig=x%10;\r\n    for (int i = 1;i<7;i++) {\r\n        ten[i]=10*ten[i-1];\r\n        mxDig=max(mxDig,x/ten[i-1]%10);\r\n    }\r\n    int cnt=0;\r\n    while (x){\r\n        x-=mxDig;\r\n        mxDig=x%10;\r\n        for (int i = 1;i<7;i++) {\r\n        mxDig=max(mxDig,x/ten[i-1]%10);\r\n        }\r\n        cnt++;\r\n    }\r\n    cout<<cnt<<'\\n';\r\n    return 0;\r\n}",
  "1638":
    "#include <bits/stdc++.h>\n#define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n#define ll long long\n#define MOD 1000000007;\nusing namespace std;\n\n\n\nvoid solve(){\n    int n;\n    cin>>n;\n    vector<vector<ll>> dp(n+1,vector<ll>(n+1));\n    vector<string>s(n);\n    for (int i=0;i<n;++i) cin>>s[i];\n    dp[1][1]=1;\n    for (int i=1;i<=n;++i){\n        for (int j=1;j<=n;++j){\n            dp[i][j]=(dp[i][j]+dp[i-1][j]+dp[i][j-1])%MOD;\n            if (s[i-1][j-1]=='*') dp[i][j]=0;\n        }\n    }\n    cout<<dp[n][n]<<'\\n';\n}\n\nint main()\n{\n    fastio;\n    solve();\n\treturn 0;\n}\n\n",
  "1639":
    '# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n# define MOD 1000000007\n# define ten6 1000002\nusing namespace std;\nvector<vector<int>> dp;\nint l1,l2;\nstring s1,s2;\n\nint main()\n{\n    // freopen("test_input.txt","r",stdin);\n    fastio; \n    cin>>s1>>s2;\n    if (s1.size()>s2.size()) swap(s1,s2);\n    l1=s1.size();l2=s2.size();\n    dp.assign(l1,vector<int>(l2,0));\n    for (int i=0;i<l1;++i)\n        for (int k=0;k<l2;++k)\n            dp[i][k]=max(i+1,k+1);\n    for (int i=0; i<l1; ++i) {\n        for (int k=0; k<l2; ++k) {\n            if (i>0&&k>0) dp[i][k]=min(dp[i][k],dp[i-1][k-1]+1);\n            if (s1[i]==s2[k]) --dp[i][k];\n            if (k>0)dp[i][k]=min(dp[i][k],dp[i][k-1]+1);\n            if (i>0)dp[i][k]=min(dp[i][k],dp[i-1][k]+1);\n        }\n    }\n    cout<<dp[l1-1][l2-1]<<\'\\n\';\n    return 0;\n}',
  "1640":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<b;i++)\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n,x;\r\n\tcin>>n>>x;\r\n\tvector <pair<int,int>> a(n);\r\n\tREP(i,0,n) {\r\n\t\tcin>>a[i].first;\r\n\t\ta[i].second=i+1;\r\n\t}\r\n\tsort(all(a));\r\n\tfor (int l=0,r=n-1;l<r;){\r\n\t\tint s=a[l].first+a[r].first;\r\n\t\tif(s==x){\r\n\t\t\tcout<<a[l].second<<' '<<a[r].second<<'\\n';\r\n\t\t\treturn 0;\r\n\t\t}\r\n\t\tif (s<x) l++;\r\n\t\telse r--;\r\n\t}\r\n\tcout<<\"IMPOSSIBLE\\n\";\r\n\treturn 0;\r\n}",
  "1641":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n,x;\r\n\tcin>>n>>x;\r\n\tvector <pair<int,int>> a(n),b;\r\n\tfor (int i=1;i<=n;i++){\r\n\t\tcin>>a[i-1].first;\r\n\t\ta[i-1].second=i;\r\n\t}\r\n\tsort(all(a));\r\n\tfor (int i=0;i<n;i++){\r\n\t\tauto a1=a[i];\r\n\t\tint tg=x-a1.first,l=i+1,r=n-1;\r\n\t\twhile(l<r){\r\n\t\t\tint tmp=a[l].first+a[r].first;\r\n\t\t\tif (tmp>tg)r--;\r\n\t\t\telse if (tmp<tg) l++;\r\n\t\t\telse{\r\n\t\t\t\tcout<<a1.second<<' '<<a[l].second<<' '<<a[r].second<<'\\n';\r\n\t\t\t\treturn 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tcout<<\"IMPOSSIBLE\\n\";\r\n\treturn 0;\r\n}",
  "1642":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\nconst int MOD = 1000000007;\n\nint main(){\n\tfastio;\n\tint n,x;\n\tcin>>n>>x;\n\tvector<pair<int,int>> arr(n);\n\tfor (int i=0;i<n;++i) {\n\t\tcin>>arr[i].first;\n\t\tarr[i].second=i+1;\n\t}\n\tsort(arr.begin(),arr.end());\n\tfor (int l1=0;l1<n;++l1){\n\tfor (int r1=l1+3;r1<n;++r1){\n\t\tint l2=l1+1,r2=r1-1;\n\t\tint tmp=arr[l1].first+arr[r1].first;\n\t\twhile (l2<r2){\n\t\t\tint curr=arr[l2].first+arr[r2].first+tmp;\n\t\t\tif (curr==x) {\n\t\t\t\tcout<<arr[l1].second<<' '<<arr[l2].second<<' '<<arr[r2].second<<' '<<arr[r1].second<<'\\n';\n\t\t\t\treturn 0;\n\t\t\t}\n\t\t\telse if (curr<x) ++l2;\n\t\t\telse --r2;\n\t\t}\n\t}\n\t}\n\tcout<<\"IMPOSSIBLE\\n\";\n    return 0;\n}",
  "1643":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<b;i++)\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\n\r\nint main(){\r\n\tfastio;\r\n\tint n;cin>>n;\r\n\tll Min=0;\r\n\tll re=-1e18;\r\n\tint temp;\r\n\tll sum=0;\r\n\tfor (int i=0;i<n;i++){\r\n\t\tcin>>temp;\r\n\t\tsum+=temp;\r\n\t\tre=max(re,sum-Min);\r\n\t\tMin=min(sum,Min);\r\n\t}\r\n\tcout<<re<<endl;\r\n\treturn 0;\r\n}",
  "1644":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    fastio;\r\n    int n,a,b;\r\n    cin>>n>>a>>b;\r\n    vector<int> arr(n);\r\n    vector <ll> acuSum(n+1);\r\n    for(int i=0;i<n;i++) {\r\n        cin>>arr[i];\r\n        acuSum[i+1]=acuSum[i]+arr[i];\r\n    }\r\n    multiset<ll> ms;\r\n    ll currMax=-1e18;\r\n    ll re=-1e18;\r\n    for (int i=0;i<=n;i++){\r\n        if (i>=a){\r\n            if (i>b) {\r\n                multiset<ll>::iterator it=ms.find(acuSum[i-b-1]);\r\n               ms.erase(it);\r\n            } \r\n            ms.insert(acuSum[i-a]);\r\n            \r\n            re=max(re,acuSum[i]-*ms.begin());\r\n            \r\n        }\r\n    }\r\n    cout<<re<<'\\n';\r\n    return 0;\r\n}",
  "1645":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n,tmp,pre;\r\n\tcin>>n;\r\n\tvector <int> dsu (n+1);\r\n\tiota(all(dsu),-1);\r\n\tvector <int> s(n);\r\n\tcin>>s[0];cout<<0;\r\n\tfor (int i=1;i<n;i++){\r\n\t\tcin>>s[i];\r\n\t\twhile (dsu[i]!=-1&&s[dsu[i]]>=s[i]){\r\n\t\t\tdsu[i]=dsu[dsu[i]];\r\n\t\t}\r\n\t\tcout<<' '<<dsu[i]+1;\r\n\t}\r\n\tcout<<'\\n';\r\n\treturn 0;\r\n}",
  "1646":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n,q;\r\n\tcin>>n>>q;\r\n\tvector <ll> a(n+1);\r\n\tfor (int i=1;i<=n;i++){\r\n\t\tcin>>a[i];\r\n\t\ta[i]+=a[i-1];\r\n\t}\r\n\tint x,y;\r\n\tfor (int i=0;i<q;i++){\r\n\t\tcin>>x>>y;\r\n\t\tcout<<a[y]-a[x-1]<<'\\n';\r\n\t}\r\n\treturn 0;\r\n}",
  "1647":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nvector<int> st;\r\nvector<int> arr;\r\nvoid build(int v,int tl,int tr){\r\n\tif (tl==tr){\r\n\t\tst[v]=arr[tl];\r\n\t}\r\n\telse{\r\n\t\tint mid=tl+tr>>1;\r\n\t\tbuild(v*2,tl,mid);\r\n\t\tbuild(v*2+1,mid+1,tr);\r\n\t\tst[v]=min(st[v*2],st[v*2+1]);\r\n\t}\r\n}\r\nint get(int v,int tl,int tr,int l , int r){\r\n\tif (tl==l&&tr==r) return st[v];\r\n\tif (tl>r||tr<l) return -1;\r\n\tint mid=tl+tr>>1;\r\n\tint x=get(v*2,tl,mid,l,min(mid,r)),y=get(v*2+1,mid+1,tr,max(l,mid+1),r);\r\n\tif (x==-1)return y;\r\n\tif (y==-1) return x;\r\n\treturn min(x,y);\r\n\r\n}\r\nint main(){\r\n\tfastio;\r\n\tint n,q;\r\n\tcin>>n>>q;\r\n\tst.assign(4*n,0);\r\n\tarr.assign(n,0);\r\n\tfor (auto & v:arr)cin>>v;\r\n\tbuild(1,0,n-1);\r\n\tint x,y;\r\n\tfor (int i=0;i<q;i++){\r\n\t\tcin>>x>>y;\r\n\t\tcout<<get(1,0,n-1,x-1,y-1)<<'\\n';\r\n\t}\r\n\treturn 0;\r\n}",
  "1648":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nvector<ll> st;\r\nvector<int> arr;\r\nvoid build(int v,int tl,int tr){\r\n\tif (tl==tr){\r\n\t\tst[v]=arr[tl];\r\n\t}\r\n\telse{\r\n\t\tint mid=(tl+tr)>>1;\r\n\t\tbuild(v*2,tl,mid);\r\n\t\tbuild(v*2+1,mid+1,tr);\r\n\t\tst[v]=st[v*2]+st[v*2+1];\r\n\t}\r\n}\r\nll get(int v,int tl,int tr,int l , int r){\r\n\tif (tl==l&&tr==r) return st[v];\r\n\tif (tl>r||tr<l) return -1;\r\n\tint mid=(tl+tr)>>1;\r\n\tll x=get(v*2,tl,mid,l,min(mid,r)),y=get(v*2+1,mid+1,tr,max(l,mid+1),r);\r\n\tif (x==-1)return y;\r\n\tif (y==-1) return x;\r\n\treturn x+y;\r\n\r\n}\r\nvoid update(int v,int tl,int tr,int & pos,int & val){\r\n\tif(tl==tr){\r\n\t\tst[v]=val;\r\n\t}\r\n\telse {\r\n\t\tint mid = (tl+tr)>>1;\r\n\t\tif (pos<=mid) update(v*2,tl,mid,pos,val);\r\n\t\telse update(v*2+1,mid+1,tr,pos,val);\r\n\t\tst[v]=st[v*2]+st[v*2+1];\r\n\t}\r\n}\r\nint main(){\r\n\tfastio;\r\n\tint n,q;\r\n\tcin>>n>>q;\r\n\tst.assign(4*n,0);\r\n\tarr.assign(n,0);\r\n\tfor (auto & v:arr)cin>>v;\r\n\tbuild(1,0,n-1);\r\n\tint k,x,y;\r\n\tfor (int i=0;i<q;i++){\r\n\t\tcin>>k>>x>>y;\r\n\t\tif (k==2)\r\n\t\tcout<<get(1,0,n-1,x-1,y-1)<<'\\n';\r\n\t\telse {\r\n\t\t\tx--;\r\n\t\t\tupdate(1,0,n-1,x,y);\r\n\t\t}\r\n\t}\r\n\treturn 0;\r\n}",
  "1649":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nvector<ll> st;\r\nvector<int> arr;\r\nvoid build(int v,int tl,int tr){\r\n\tif (tl==tr){\r\n\t\tst[v]=arr[tl];\r\n\t}\r\n\telse{\r\n\t\tint mid=(tl+tr)>>1;\r\n\t\tbuild(v*2,tl,mid);\r\n\t\tbuild(v*2+1,mid+1,tr);\r\n\t\tst[v]=min(st[v*2],st[v*2+1]);\r\n\t}\r\n}\r\nll get(int v,int tl,int tr,int l , int r){\r\n\tif (tl==l&&tr==r) return st[v];\r\n\tif (tl>r||tr<l) return -1;\r\n\tint mid=(tl+tr)>>1;\r\n\tll x=get(v*2,tl,mid,l,min(mid,r)),y=get(v*2+1,mid+1,tr,max(l,mid+1),r);\r\n\tif (x==-1)return y;\r\n\tif (y==-1) return x;\r\n\treturn min(x,y);\r\n\r\n}\r\nvoid update(int v,int tl,int tr,int & pos,int & val){\r\n\tif(tl==tr){\r\n\t\tst[v]=val;\r\n\t}\r\n\telse {\r\n\t\tint mid = (tl+tr)>>1;\r\n\t\tif (pos<=mid) update(v*2,tl,mid,pos,val);\r\n\t\telse update(v*2+1,mid+1,tr,pos,val);\r\n\t\tst[v]=min(st[v*2],st[v*2+1]);\r\n\t}\r\n}\r\nint main(){\r\n\tfastio;\r\n\tint n,q;\r\n\tcin>>n>>q;\r\n\tst.assign(4*n,0);\r\n\tarr.assign(n,0);\r\n\tfor (auto & v:arr)cin>>v;\r\n\tbuild(1,0,n-1);\r\n\tint k,x,y;\r\n\tfor (int i=0;i<q;i++){\r\n\t\tcin>>k>>x>>y;\r\n\t\tif (k==2)\r\n\t\tcout<<get(1,0,n-1,x-1,y-1)<<'\\n';\r\n\t\telse {\r\n\t\t\tx--;\r\n\t\t\tupdate(1,0,n-1,x,y);\r\n\t\t}\r\n\t}\r\n\treturn 0;\r\n}",
  "1650":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nvector <int> st;\r\nvector <int> arr;\r\nint n;\r\n\r\nvoid build(int v,  int tl,int tr){\r\n\tif (tl==tr){\r\n\t\tst[v]=arr[tl];\r\n\t}\r\n\telse{\r\n\t\tint mid = (tl+tr)>>1;\r\n\t\tbuild(v*2,tl,mid);\r\n\t\tbuild(v*2+1,mid+1,tr);\r\n\t\tst[v]=st[v*2]^st[v*2+1];\r\n\t}\r\n}\r\n\r\nint get(int v, int tl ,int tr, int l , int r){\r\n\tif(tl==l&&tr==r) return st[v];\r\n\tif (tl>r||tr<l) return 0;\r\n\tint mid=(tl+tr)>>1;\r\n\treturn get(v*2,tl,mid,l,min(mid,r))^get(v*2+1,mid+1,tr,max(mid+1,l),r);\t\r\n}\r\n\r\nint main(){\r\n\tfastio;\r\n\tint q;\r\n\tcin>>n>>q;\r\n\tarr.assign(n,0);\r\n\tst.assign(4*n,0);\r\n\tfor (auto&v:arr)cin>>v;\r\n\tbuild(1,0,n-1);\r\n\tint a,b;\r\n\tfor (int i=0;i<q;i++){\r\n\t\tcin>>a>>b;\r\n\t\tcout<<get(1,0,n-1,a-1,b-1)<<'\\n';\r\n\t}\r\n\treturn 0;\r\n}",
  "1651":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\nvector <ll> st;\r\nvector <int> arr;\r\nint n;\r\n\r\n\r\nvoid update(int v, int tl ,int tr, int l , int r, int val){\r\n\tif(tl==l&&tr==r) {\r\n\t\tst[v]+=val;\r\n\t\treturn;\r\n\t}\r\n\tif (tl>r||tr<l) return;\r\n\tint mid=(tl+tr)>>1;\r\n\tupdate(v*2,tl,mid,l,min(mid,r),val);\r\n\tupdate(v*2+1,mid+1,tr,max(mid+1,l),r,val);\t\r\n}\r\n\r\nll get(int v, int tl ,int tr, int pos){\r\n\tif(tl==tr) return st[v];\r\n\tint mid=(tl+tr)>>1;\r\n\tll re=st[v];\r\n\tif (mid>=pos)return re+get(v*2,tl,mid,pos);\r\n\telse return re+get(v*2+1,mid+1,tr,pos);\r\n}\r\n\r\nint main(){\r\n\tfastio;\r\n\tint q;\r\n\tcin>>n>>q;\r\n\tarr.assign(n,0);\r\n\tst.assign(4*n,0);\r\n\tfor (auto&v:arr)cin>>v;\r\n\tint k,a,b,u,pos;\r\n\tfor (int i=0;i<q;i++){\r\n\t\tcin>>k;\r\n\t\tif (k==1) {\r\n\t\t\tcin>>a>>b>>u;\r\n\t\t\tupdate(1,0,n-1,a-1,b-1,u);\r\n\t\t}\r\n\t\telse{\r\n\t\t\tcin>>pos;\r\n\t\t\tpos--;\r\n\t\t\tcout<<get(1,0,n-1,pos)+arr[pos]<<'\\n';\r\n\t\t}\r\n\t}\r\n\treturn 0;\r\n}",
  "1652":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nint n,q;\nvector<vector<int>> F;\n\nint sum(int r,int c){\n\tif (r<0||c<0) return 0;\n\tint re=0;\n\tfor (int i=r;i>=0;i=(i&(i+1))-1){\n\t\tfor (int j=c;j>=0;j=(j&(j+1))-1){\n\t\t\tre+=F[i][j];\n\t\t}\n\t}\n\treturn re;\n}\n\nvoid increase(int r,int c,int num){\n\tfor (int i=r;i<n;i=i|(i+1)){\n\t\tfor (int j=c;j<n;j=j|(j+1)){\n\t\t\tF[i][j]+=num;\n\t\t}\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tF.assign(n,vector<int>(n,0));\n\tstring s;\n\tfor (int i=0;i<n;++i) {\n\t\tcin>>s;\n\t\tfor (int j=0;j<n;++j){\n\t\t\tif (s[j]=='*') increase(i,j,1);\n\t\t}\n\t}\n\tfor (int i=0;i<q;++i){\n\t\tint r1,c1,r2,c2;\n\t\tcin>>r1>>c1>>r2>>c2;--r1;--c1;--r2;--c2;\n\t\tcout<<sum(r2,c2)-sum(r2,c1-1)-sum(r1-1,c2)+sum(r1-1,c1-1)<<'\\n';\n\t}\n\treturn 0;\n}\n",
  "1653":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nvector<pair<int,ll>> dp;\nvector<ll> arr;\nint n;\nll x,mx;\n\npair<int,ll> get(ll currW, ll state) {\n\tif (dp[state].first==-1) {\n        pair<int,ll> re = {n+1,0LL};\n        for (ll i=0;i<n;++i) {\n            if (state & (1LL<<i)) continue;\n            re=min(re,get(arr[i],state|(1LL<<i)));\n        }\n        dp[state] = re;\n    }\n    ll w = dp[state].second+currW;\n    if (w<=x) return {dp[state].first,w};\n    return {dp[state].first+1,min(dp[state].second,currW)};\n}\n \nint main() {\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>x;\n\tmx=(1LL<<n);\n\tarr.assign(n,0LL);\n\tdp.assign(mx,{-1,0LL});\n\tfor (ll &v:arr) cin>>v;\n\tdp[mx-1]={0,0LL};\n\tcout<<get(0LL,0LL).first+1<<'\\n';\n\treturn 0;\n}",
  "1655":
    "#include <bits/stdc++.h>\n#define fastio ios::sync_with_stdio(false);cin.tie(NULL)\n#define ll long long\n#define sz(x) (int)((x).size())\n#define all(x) x.begin(),x.end()\nusing namespace std;\n\nstruct Trie{\n\tstruct Node {\n\t\tint idx=-1;\n\t\tNode* arr[2]={nullptr,nullptr};\n\t};\n\tNode* root=new Node;\n\tvoid add(int y,int idx){\n\t\tNode* cur=root;\n\t\tfor (int i=20;i>=0;--i){\n\t\t\tif ((1<<i)&y){\n\t\t\t\tif (!cur->arr[1]) cur->arr[1]=new Node;\n\t\t\t\tcur=cur->arr[1];\n\t\t\t}\n\t\t\telse {\n\t\t\t\tif (!cur->arr[0]) cur->arr[0]=new Node;\n\t\t\t\tcur=cur->arr[0];\n\t\t\t}\n\t\t}\n\t\tcur->idx=idx;\n\t}\n\tint get(int y){\n\t\tNode* cur=root;\n\t\tfor (int i=20;i>=0;--i){\n\t\t\tif (!((1<<i)&y)){\n\t\t\t\tif (cur->arr[1]!=nullptr) {\n\t\t\t\t\tcur=cur->arr[1];\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tcur=cur->arr[0];\n\t\t\t\t}\n\t\t\t}\n\t\t\telse {\n\t\t\t\tif (cur->arr[0]!=nullptr) {\n\t\t\t\t\tcur=cur->arr[0];\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tcur=cur->arr[1];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn cur->idx;\n\t}\n};\n\n\nint main(){\n\tfastio;\n\tint n;\n\tcin>>n;\n\tvector<int> a(n);\n\tfor (int &v:a) cin>>v;\n\tvector<int> b(n+1);\n\tfor (int i=0;i<n;++i) b[i+1]=b[i]^a[i];\n\tTrie t;\n\tfor (int i=0;i<=n;++i) t.add(b[i],i);\n\tint mx=0;\n\tfor (int i=0;i<=n;++i) {\n\t\tmx=max(mx,b[i]^b[t.get(b[i])]);\n\t}\n\tcout<<mx<<'\\n';\n}",
  "1660":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n,tmp;\r\n\tll x;\r\n\tcin>>n>>x;\r\n\tvector <ll> s(n+1);\r\n\tfor (int i=1;i<=n;i++){\r\n\t\tcin>>tmp;\r\n\t\ts[i]=tmp+s[i-1];\r\n\t}\r\n\tsort(s.begin()+1,s.end());\r\n\tint l=0,r=0;\r\n\tll re=0;\r\n\twhile(l<=n&&r<=n){\r\n\t\tll tg=s[r]-s[l];\r\n\t\tif (tg<x) r++;\r\n\t\telse if (tg>x) l++;\r\n\t\telse {\r\n\t\t\tll a=1,b=1;\r\n\t\t\twhile (l<n&&s[l+1]==s[l]){l++;a++;}\r\n\t\t\tl++;\r\n\t\t\twhile (r<n&&s[r+1]==s[r]){r++;b++;}\r\n\t\t\tr++;\r\n\t\t\tre+=a*b;\r\n\t\t}\r\n\t}\r\n\tcout<<re<<'\\n';\r\n\treturn 0;\r\n}",
  "1661":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\nusing namespace std;\nint main(){\n\tfastio;\n\tint n,tmp;\n\tll x;\n\tcin>>n>>x;\n\tvector <ll> s(n+1);\n\tfor (int i=1;i<=n;i++){\n\t\tcin>>tmp;\n\t\ts[i]=tmp+s[i-1];\n\t}\n\tll re=0;\n\tmap <ll,int> m;\n\tfor (int i=n;i>=0;i--){\n\t\tre+=m[s[i]+x];\n\t\tm[s[i]]++;\n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "1662":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\nusing namespace std;\r\nint main(){\r\n\tfastio;\r\n\tint n,tmp;\r\n\tcin>>n;\r\n\tvector <ll> s(n+1);\r\n\tfor (int i=1;i<=n;i++){\r\n\t\tcin>>tmp;\r\n\t\ts[i]=tmp+s[i-1];\r\n\t}\r\n\tll re=0;\r\n\tunordered_map <ll,int> m;\r\n\tm.reserve(n+1);\r\n\tfor (int i=n;i>=0;i--){\r\n\t\ttmp=s[i]%n;\r\n\t\tif (tmp<0)tmp+=n;\r\n\t\tif (m.find(tmp)!=m.end()) re+=m[tmp];\r\n\t\tm[tmp]++;\r\n\t}\r\n\tcout<<re<<'\\n';\r\n\treturn 0;\r\n}",
  "1666":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n# define MOD 1000000007\n# define ten6 1000002\nusing namespace std;\nint n, m;\nvector<vector<int>> adList; \nvector<bool> visited;\nint cnt;\nvoid dfs(int x) {\n    visited[x]=true;\n    for (int v:adList[x]) {\n        if (visited[v]) continue;\n        dfs(v);\n    }\n}\nint main()\n{\n    fastio;\n    cin>>n>>m;\n    adList.assign(n,vector<int>());\n    visited.assign(n,false);\n    for (int i=0;i<m;++i){\n        int x,y;\n        cin>>x>>y;--x;--y;\n        adList[x].push_back(y);\n        adList[y].push_back(x);\n    }\n    vector<pair<int,int>> ls;\n    for (int i=0;i<n;++i) {\n        if (visited[i]) continue;\n        if (i>0) ls.push_back({i-1,i}); \n        dfs(i);\n    }\n    cout<<ls.size()<<'\\n';\n    for (auto p:ls) cout<<p.first+1<<' '<<p.second+1<<'\\n';\n    return 0;\n}",
  "1667":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\n# define MOD 1000000007\nusing namespace std;\n \nint n,m;\nvector <vector<int>> adList;\nvector <bool> visit;\nvector<int> p;\nqueue <int> q;\n\t\nbool bfs(int start,vector<int>&path){\n    p.assign(n,0);\n    visit.assign(n,0);\n    q.push(start);\n    visit[start]=true;\n    bool connect=false;\n\twhile (!q.empty()){\n\t\tint v=q.front();\n        if (v==n-1) {\n            connect=true;\n            break;\n        }\n\t\tq.pop();\n\t\tfor (int &u:adList[v]){\n\t\t\tif (visit[u]) continue;\n\t\t\tvisit[u]=true;\n\t\t\tp[u]=v;\n\t\t\tq.push(u);\n\t\t}\n\t}\n    if (!connect) return false;\n    int tmp=n-1;\n    while (tmp!=0){\n        path.push_back(tmp);\n        tmp=p[tmp];\n    }\n    reverse(path.begin(),path.end());\n    return true;\n}\nint main(){\n\tfastio;\n\tcin>>n>>m;\n\tadList.assign(n,vector<int>());\n    int x,y;\n\tfor (int i=0;i<m;++i){\n\t\tcin>>x>>y;x--;y--;\n\t\tadList[x].push_back(y);\n\t\tadList[y].push_back(x);\n\t}\n    vector<int> path;\n    if (bfs(0,path)){\n        cout<<path.size()+1<<'\\n';\n        cout<<1;\n        for (int &v:path){\n            cout<<' '<<v+1;\n        }\n        cout<<'\\n';\n    }\n    else cout<<\"IMPOSSIBLE\\n\";\n\treturn 0;\n}\n\n",
  "1668":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\n# define MOD 1000000007\nusing namespace std;\n \nint n,m;\nvector <vector<int>> adList;\nvector <bool> visit;\nvector<int> p;\n\t\nbool bfs(int start){\n    queue <int> q;\n    q.push(start);\n    visit[start]=true;\n\twhile (!q.empty()){\n\t\tint v=q.front();\n\t\tq.pop();\n\t\tfor (int &u:adList[v]){\n\t\t\tif (visit[u]) {\n                if (p[u]==p[v]) return false;\n                continue;\n            }\n\t\t\tvisit[u]=true;\n\t\t\tp[u]=(p[v]+1)%2;\n\t\t\tq.push(u);\n\t\t}\n\t}\n    return true;\n}\nint main(){\n\tfastio;\n\tcin>>n>>m;\n\tadList.assign(n,vector<int>());\n    visit.assign(n,0);\n    p.assign(n,-1);\n    int x,y;\n\tfor (int i=0;i<m;++i){\n\t\tcin>>x>>y;x--;y--;\n\t\tadList[x].push_back(y);\n\t\tadList[y].push_back(x);\n\t}\n    for (int start=0;start<n;++start){\n        if (visit[start]) continue;\n        p[start]=0;\n        visit[start]=true;\n        if (!bfs(start)){\n            cout<<\"IMPOSSIBLE\\n\";\n            return 0;\n        }\n    }\n    for (int i=0;i<n;++i) {\n        if (i!=0) cout<<' ';\n        cout<<p[i]+1;\n    }\n    cout<<'\\n';\n\treturn 0;\n}\n\n",
  "1669":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\n# define MOD 1000000007\nusing namespace std;\n \nint n,m;\nvector <vector<int>> adList;\nvector <bool> visit;\nvector <bool> marked;\nvector<int> path;\n\t\nbool dfs(int curr, vector<int>&eulerPath,int p){\n    marked[curr]=true;\n    eulerPath.push_back(curr);\n    for (int &v:adList[curr]) {\n        if (visit[v]) {\n            if (p!=v&&marked[v]) {\n                path.push_back(v);\n                int eusz=eulerPath.size();\n                int tmp=eusz-1;\n                while (eulerPath[tmp]!=v){\n                    path.push_back(eulerPath[tmp]);\n                    --tmp;\n                }\n                path.push_back(v);\n                return true;\n            }\n            continue;\n        }\n        visit[v]=true;\n        if (dfs(v,eulerPath,curr)) return true;\n    }\n    marked[curr]=false;\n    eulerPath.pop_back();\n    return false;\n}\nint main(){\n\tfastio;\n\tcin>>n>>m;\n\tadList.assign(n,vector<int>());\n    visit.assign(n,0);\n    marked.assign(n,0);\n    int x,y;\n\tfor (int i=0;i<m;++i){\n\t\tcin>>x>>y;x--;y--;\n\t\tadList[x].push_back(y);\n\t\tadList[y].push_back(x);\n\t}\n    vector<int>eulerPath;\n    for (int start=0;start<n;++start){\n        if (visit[start]) continue;\n        visit[start]=true;\n        if (dfs(start,eulerPath,-1)) {\n                cout<<path.size()<<'\\n';\n                for (int i=0;i<path.size();++i) {\n                    if (i!=0) cout<<' ';\n                    cout<<path[i]+1;\n                }\n                cout<<'\\n';\n                return 0;\n        }\n    }\n    cout<<\"IMPOSSIBLE\\n\";\n\n\treturn 0;\n}\n\n",
  "1671":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nll MOD = 1000000007;\n\nstruct edge {\n\tint to;\n\tll w;\n};\n\nvector<vector<edge>> adjList;\nint n,m;\n\nint main() {\n\tMOD*=MOD;\n\tcin>>n>>m;\n\tadjList.assign(n,vector<edge>());\n\tfor (int i=0; i<m; ++i) {\n\t\tint a,b,c;\n\t\tcin>>a>>b>>c;\n\t\t--a;--b;\n\t\tadjList[a].push_back(edge({b,(ll)c}));\n\t}\n\t\n\t// map<ll,int> m;\n\tset<pair<ll,int>> m;\n\tvector<ll> d (n,MOD);\t\n\td[0]=0;\n\n\tm.insert(pair<ll,int>(0LL,0));\n\n\twhile (!m.empty()) {\n\t\tint curr = m.begin()->second;\n\t\tm.erase(m.begin());\n\n\t\tfor (edge &e: adjList[curr]) {\n\t\t\tif (d[e.to]>d[curr]+e.w){\n\t\t\t\tm.erase({d[e.to],e.to});\n\t\t\t\td[e.to]=d[curr]+e.w;\n\t\t\t\tm.insert(pair<ll,int>(d[e.to],e.to));\n\t\t\t}\n\t\t}\n\n\t}\n\n\tfor (int i=0;i<n;++i){\n\t\tif (i!=0) cout<<' ';\n\t\tcout<<d[i];\n\t}\n\tcout<<'\\n';\n\treturn 0;\n}",
  "1672":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nll MOD = 1000000007;\n\nvector <vector<ll>> d;\nint n,m,q;\n\nint main() {\n\tfastio;\n\tMOD*=MOD;\n\tcin>>n>>m>>q;\n\td.assign(n,vector<ll>(n,MOD));\n\tfor (int i=0;i<n;++i) d[i][i]=0;\n\tfor (int i=0; i<m; ++i) {\n\t\tint a,b;\n\t\tll c;\n\t\tcin>>a>>b>>c;\n\t\t--a;--b;\n\t\td[a][b]=d[b][a]=min(d[a][b],c);\n\t}\n\t\n\tfor (int i=0; i<n; ++i) {\n\t\tfor (int j=0;j<n; ++j){\n\t\t\tfor (int k=j+1; k<n; ++k) {\n\t\t\t\tif (d[j][i]==MOD || d[i][k]==MOD) continue;\n\t\t\t\td[k][j] = d[j][k] = min(d[j][k],d[j][i]+d[i][k]);\n\t\t\t}\n\t\t}\n\t}\n\n\tfor (int i=0;i<q;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;\n\t\t--a;--b;\n\t\tif (d[a][b]!=MOD)\n\t\tcout<<d[a][b]<<'\\n';\n\t\telse cout<<-1<<'\\n';\n\t}\n\tcout<<'\\n';\n\treturn 0;\n}",
  "1673":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nll INF = 1000000007;\nstruct edge{\n\tint from;\n\tint to;\n\tll w;\n};\n\nvector <ll> d;\nvector <edge> eL;\nvector<vector<int>>adjList;\nint n,m;\n\nll solve() {\n\tfor (int i=0;i<n-1;++i){\n\t\tfor (int j=0;j<m;++j){\n\t\t\tif (d[eL[j].from]!=INF && d[eL[j].from]+eL[j].w<d[eL[j].to]){\n\t\t\t\td[eL[j].to]=d[eL[j].from]+eL[j].w;\n\t\t\t} \n\t\t}\n\t}\n\tvector<int> check(n);\n\tfor (int j=0;j<m;++j){\n\t\tif (d[eL[j].from]!=INF && d[eL[j].from]+eL[j].w<d[eL[j].to]){\n\t\t\tcheck[eL[j].to]=1;\n\t\t\td[eL[j].to]=d[eL[j].from]+eL[j].w;\n\t\t} \n\t}\n\tqueue<int>q,q1;\n\tq.push(0);\n\twhile(!q.empty()){\n\t\tint s=q.front();\n\t\tq.pop();\n\t\tif (check[s]==2) continue;\n\t\tif (check[s]==1) q1.push(s);\n\t\tcheck[s]=2;\n\t\tfor (int &v:adjList[s]) q.push(v);\n\t}\n\twhile(!q1.empty()){\n\t\tint s=q1.front();\n\t\tif (s==n-1) return -1;\n\t\tq1.pop();\n\t\tif (check[s]==3) continue;\n\t\tcheck[s]=3;\n\t\tfor (int &v:adjList[s]) q1.push(v);\n\t}\n\treturn -d[n-1];\n}\n\nint main() {\n\tfastio;\n\tINF*=INF;\n\tcin>>n>>m;\n\td.assign(n,INF);\n\td[0]=0;\n\tadjList.assign(n,vector<int>());\n\tfor (int i=0; i<m; ++i) {\n\t\tint a,b;\n\t\tll c;\n\t\tcin>>a>>b>>c;\n\t\t--a;--b;c=-c;\n\t\teL.push_back(edge({a,b,c}));\n\t\tadjList[a].push_back(b);\n\t}\n\tcout<<solve()<<'\\n';\n\treturn 0;\n}",
  "1674":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\r\n# define MOD 1000000007\r\nusing namespace std;\r\n\r\nint n;\r\nvector <vector<int>> adj;\r\nvector <bool> visit;\r\nvector <ll> ans;\r\nll dfs(int v){\r\n\tll re=0;\r\n\tfor (auto u:adj[v]){\r\n\t\tif (visit[u]) continue;\r\n\t\tvisit[u]=true;\r\n\t\tre+=dfs(u);\r\n\t}\r\n\treturn ans[v]=re+1;\r\n}\r\n\r\nint main(){\r\n\tfastio;\r\n\tcin>>n;\r\n\tadj.assign(n,vector<int>());\r\n\tvisit.assign(n,false);\r\n\tans.assign(n,0);\r\n\tint tmp;\r\n\tfor (int i=1;i<n;i++){\r\n\t\tcin>>tmp;\r\n\t\ttmp--;\r\n\t\tadj[tmp].push_back(i);\r\n\t}\r\n\tdfs(0);\r\n\tcout<<ans[0]-1;\r\n\tfor (int i=1;i<n;i++){\r\n\t\tcout<<' '<<ans[i]-1;\r\n\t}\r\n\tcout<<'\\n';\r\n\treturn 0;\r\n}",
  "1675":
    '#include <bits/stdc++.h>\nusing namespace std;\ntypedef long long ll;\nconst ll MOD=1000000007;\nint n,m;\nvector<array<int,3>> eL;\nvector<int> p;\nvector<int> sz;\nll re;\n\nint find(int x){\n\treturn p[x]=(x==p[x])?x:find(p[x]);\n}\n\nvoid uni(int a, int b){\n\tint x=find(a),y=find(b);\n\tif (x==y) return;\n\tif (sz[x]>sz[y]) {\n\t\tp[y]=x;\n\t\tsz[x]+=sz[y];\n\t}\n\telse {\n\t\tp[x]=y;\n\t\tsz[y]+=sz[x];\n\t}\n}\n\nbool solve(){\n\tp.assign(n,0);\n\tiota(p.begin(),p.end(),0);\n\tsz.assign(n,1);\n\tre=0;\n\tfor (auto &arr:eL) {\n\t\tint a=find(arr[1]),b=find(arr[2]);\n\t\tif (a==b) continue;\n\t\telse uni(a,b);\n\t\tre+=arr[0];\n\t}\n\treturn sz[find(0)]==n;\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tfor (int i=0;i<m;++i){\n\t\tint a,b,c;\n\t\tcin>>a>>b>>c;--a;--b;\n\t\teL.push_back({c,a,b});\n\t}\n\tsort(eL.begin(),eL.end());\n\tif (solve()) cout<<re;\n\telse cout<<"IMPOSSIBLE";\n\treturn 0;\n}',
  "1676":
    "#include <bits/stdc++.h>\nusing namespace std;\ntypedef long long ll;\nconst ll MOD=1000000007;\nint n,m;\nvector<array<int,2>> eL;\nvector<int> p;\nvector<int> sz;\nint re,cc;\n\nint find(int x){\n\treturn p[x]=(x==p[x])?x:find(p[x]);\n}\n\nint uni(int a, int b){\n\tint x=find(a),y=find(b);\n\tif (x==y) return sz[x];\n\tif (sz[x]>sz[y]) {\n\t\tp[y]=x;\n\t\treturn sz[x]+=sz[y];\n\t}\n\telse {\n\t\tp[x]=y;\n\t\treturn sz[y]+=sz[x];\n\t}\n}\n\nvoid solve(){\n\tp.assign(n,0);\n\tiota(p.begin(),p.end(),0);\n\tsz.assign(n,1);\n\tre=1;cc=n;\n\tfor (auto &arr:eL) {\n\t\tint a=find(arr[0]),b=find(arr[1]);\n\t\tif (a!=b) {\n\t\t\tre=max(re,uni(a,b));\n\t\t\t--cc;\n\t\t}\n\t\tcout<<cc<<' '<<re<<'\\n';\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\teL.push_back({a,b});\n\t}\n\tsolve();\n\treturn 0;\n}",
  "1678":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nconst ll INF = 1e18;\n\nvector<vector<int>>adjList;\nvector<int>color;\nvector<int>p;\nint n,m;\nint dfs(int curr){\n\tcolor[curr]=1;\n\tfor (int &v:adjList[curr]){\n\t\tif (color[v]==2) continue;\n\t\tp[v]=curr;\n\t\tif (color[v]==1) return v;\n\t\tint tmp=dfs(v);\n\t\tif (tmp!=-1) return tmp;\n\t}\n\tcolor[curr]=2;\n\treturn -1;\n}\n\nvoid solve() {\n\tcolor.assign(n,0);\n\tp.assign(n,-1);\n\tint x=-1;\n\tfor (int i=0;i<n;++i){\n\t\tif (color[i]) continue;\n\t\tx=dfs(i);\n\t\tif (x!=-1) break;\n\t}\n\tif (x==-1){\n\t\tcout<<\"IMPOSSIBLE\";\n\t\treturn;\n\t}\n\tvector<int>path;\n\tint y=p[x];\n\twhile (y!=x) {\n\t\tpath.push_back(y);\n\t\ty=p[y];\n\t}\n\treverse(path.begin(),path.end());\n\tcout<<path.size()+2<<'\\n';\n\tcout<<x+1;\n\tfor (int&v:path)cout<<' '<<v+1;\n\tcout<<' '<<x+1;\n}\n\nint main() {\n\tfastio;\n\tcin>>n>>m;\n\tadjList.assign(n,vector<int>());\n\tfor (int i=0; i<m; ++i) {\n\t\tint a,b;\n\t\tcin>>a>>b;\n\t\t--a;--b;\n\t\tadjList[a].push_back(b);\n\t}\n\tsolve();\n\treturn 0;\n}",
  "1679":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nint n,m;\nvector<vector<int>> adjList;\nvector<int> color;\nvector<int> path;\n\nbool dfs(int curr){\n\tcolor[curr]=1;\n\tfor(int &v:adjList[curr]){\n\t\tif (color[v]==2) continue;\n\t\tif (color[v]==1 || dfs(v)) return true;\n\t}\n\tcolor[curr]=2;\n\tpath.push_back(curr);\n\treturn false;\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tadjList.assign(n,vector<int>());\n\tcolor.assign(n,0);\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\tadjList[a].push_back(b);\n\t}\n\tfor (int i=0;i<n;++i){\n\t\tif (color[i]) continue;\n\t\tif (dfs(i)) {\n\t\t\tcout<<\"IMPOSSIBLE\";\n\t\t\treturn 0;\n\t\t}\n\t}\n\tfor (int i=n-1;i>=0;--i) cout<<path[i]+1<<' ';\n\treturn 0;\n}",
  "1680":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nint n,m;\nvector<vector<int>> adjList;\nvector<int> p;\nvector<int> d;\nint dfs(int curr){\n\td[curr]=-2;\n\tint re=-1;\n\tfor (int &v:adjList[curr]){\n\t\tif (d[v]==-2) continue; // can't reach\n\t\tint nxt;\n\t\tif (d[v]==-1){\t\t\t// not tried\n\t\t\tnxt = dfs(v);\n\t\t\tif (nxt==-2) continue;\t// can't reach\n\t\t}\n\t\telse nxt=d[v];\t\t\t\t// has tried already\n\t\tif (re<nxt) {\n\t\t\tre=nxt;\n\t\t\tp[curr]=v;\n\t\t}\n\t}\n\tif (re!=-1) d[curr]=re+1;\n\treturn d[curr];\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tadjList.assign(n,vector<int>());\n\td.assign(n,-1);\n\tp.assign(n,-1);\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\tadjList[a].push_back(b);\n\t}\n\td[n-1]=0;\n\tdfs(0);\n\tvector<int> path;\n\tint y=0;\n\twhile (y!=n-1&&y!=-1){\n\t\tpath.push_back(y);\n\t\ty=p[y];\n\t}\n\tif (y==n-1){\n\t\tcout<<1+path.size()<<'\\n';\n\t\tfor (int &v:path) cout<<v+1<<' ';\n\t\tcout<<n;\n\t}\n\telse cout<<\"IMPOSSIBLE\";\n\treturn 0;\n}",
  "1681":
    "#include <bits/stdc++.h>\nusing namespace std;\ntypedef long long ll;\nconst ll MOD=1000000007;\nint n,m;\nvector<vector<int>> adjList;\nvector<ll> p;\n\nll dfs(int curr){\n\tp[curr]=0;\n\tll &re=p[curr];\n\tfor (int &v:adjList[curr]){\n\t\tif (p[v]!=-1) {\n\t\t\tre=(re+p[v])%MOD;\n\t\t\tcontinue;\n\t\t}\n\t\tre=(re+dfs(v))%MOD;\n\t}\n\treturn re;\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tadjList.assign(n,vector<int>());\n\tp.assign(n,-1);\n\tp[n-1]=1;\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\tadjList[a].push_back(b);\n\t}\n\tcout<<dfs(0);\n\treturn 0;\n}",
  "1682":
    "#include <bits/stdc++.h>\nusing namespace std;\ntypedef long long ll;\nconst ll MOD=1000000007;\nint n,m;\nvector<vector<int>> g1,g2;\nvector<int> p;\nvector<int> order;\nint cnt;\n\nvoid dfs1(int curr){\n\tp[curr]=1;\n\tfor (int &v:g1[curr]){\n\t\tif (p[v]) continue;\n\t\tdfs1(v);\n\t}\n\torder.push_back(curr);\n}\n\n\nvoid dfs2(int curr){\n\tp[curr]=2;\n\tfor (int &v:g2[curr]){\n\t\tif (p[v]==2) continue;\n\t\tdfs2(v);\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tg1.assign(n,vector<int>());\n\tg2.assign(n,vector<int>());\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\tg1[a].push_back(b);\n\t\tg2[b].push_back(a);\n\t}\n\tp.assign(n,0);\n\tfor (int i=0;i<n;++i){\n\t\tif (p[i]) continue;\n\t\tdfs1(i);\n\t}\n\tcnt=0;\n\tfor (int i=n-1;i>=0;--i){\n\t\tif (p[order[i]]==2) continue;\n\t\tdfs2(order[i]);\n\t\t++cnt;\n\t\tif (cnt>1) {\n\t\t\tcout<<\"NO\\n\";\n\t\t\tcout<<order[i]+1<<' '<<order[i+1]+1<<'\\n';\n\t\t\treturn 0;\n\t\t}\n\t}\n\tcout<<\"YES\";\n\treturn 0;\n}",
  "1683":
    "#include <bits/stdc++.h>\nusing namespace std;\ntypedef long long ll;\nconst ll MOD=1000000007;\nint n,m;\nvector<vector<int>> g1,g2;\nvector<int> p,order,re;\nint cnt;\n\nvoid dfs1(int curr){\n\tp[curr]=1;\n\tfor (int &v:g1[curr]){\n\t\tif (p[v]) continue;\n\t\tdfs1(v);\n\t}\n\torder.push_back(curr);\n}\n\n\nvoid dfs2(int curr){\n\tp[curr]=2;\n\tre[curr]=cnt;\n\tfor (int &v:g2[curr]){\n\t\tif (p[v]==2) continue;\n\t\tdfs2(v);\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tg1.assign(n,vector<int>());\n\tg2.assign(n,vector<int>());\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\tg1[a].push_back(b);\n\t\tg2[b].push_back(a);\n\t}\n\tp.assign(n,0);\n\tfor (int i=0;i<n;++i){\n\t\tif (p[i]) continue;\n\t\tdfs1(i);\n\t}\n\tcnt=1;\n\tre.assign(n,-1);\n\tfor (int i=n-1;i>=0;--i){\n\t\tif (p[order[i]]==2) continue;\n\t\tdfs2(order[i]);\n\t\t++cnt;\n\t}\n\tcout<<cnt-1<<'\\n';\n\tfor (int &v:re) cout<<v<<' ';\n\treturn 0;\n}",
  "1684":
    "#include<bits/stdc++.h>\nusing namespace std;\n\nint n,q;\nvector<vector<int>> neg,pos;\nvector<int> ans1,ans2;\n\nbool dfs(int cur, bool isPos,vector<int>&ans){\n\tbool re=true;\n\tif (ans[cur]) return (ans[cur]>0&&isPos)||(ans[cur]<0&&!isPos);\n\tans[cur]=(isPos)?1:-1;\n\tif (isPos) {\n\t\tfor(int &v:pos[cur]){\n\t\t\tif (v>0) re=re&&dfs(v-1,true,ans);\n\t\t\telse re=re&&dfs(abs(v)-1,false,ans);\n\t\t}\n\t}\n\telse {\n\t\tfor(int &v:neg[cur]){\n\t\t\tif (v>0) re=re&&dfs(v-1,true,ans);\n\t\t\telse re=re&&dfs(abs(v)-1,false,ans);\n\t\t}\t\n\t}\n\treturn re;\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>q>>n;\n\tneg.assign(n,vector<int>());\n\tpos.assign(n,vector<int>());\n\n\tfor (int i=0;i<q;++i){\n\t\tint a,b;char ca,cb;\n\t\tcin>>ca>>a>>cb>>b;\n\t\ta=a*((ca=='-')*-2+1);\n\t\tb=b*((cb=='-')*-2+1);\n\t\tif (b<0) pos[-b-1].push_back(a);\n\t\telse neg[b-1].push_back(a);\n\t\tif (a<0) pos[-a-1].push_back(b);\n\t\telse neg[a-1].push_back(b);\n\t}\n\n\tans1.assign(n,0);\n\tans2.assign(n,0);\n\tvector<int> ans(n,0);\n\tfor (int i=0;i<n;++i){\n\t\tif (ans[i]) continue;\n\t\tif(dfs(i,true,ans1)) \n\t\t\tdfs(i,true,ans);\n\t\telse if (dfs(i,false,ans2))\n\t\t\tdfs(i,false,ans);\n\t\telse {\n\t\t\tcout<<\"IMPOSSIBLE\\n\";\n\t\t\treturn 0;\n\t\t}\n\t}\n\tfor (int i=0;i<n;++i){\n\t\tif (ans[i]>0) cout<<\"+ \";\n\t\telse cout<<\"- \";\n\t}\n\tcout<<'\\n';\n\treturn 0;\n}",
  "1686":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nint n,m,cnt;\nvector<int> coins;\nvector<vector<int>> adj1,adj2;\nvector<ll> coins2;\nvector<bool> vis;\nvector<int> ord,par;\n\nvoid dfs1(int x){\n\tvis[x]=1;\n\tfor (int &v:adj1[x]){\n\t\tif (!vis[v]) dfs1(v);\n\t}\n\tord.push_back(x);\n}\n\nvoid dfs2(int x,const int &r){\n\tvis[x]=1;\n\tpar[x]=cnt;\n\tfor (int &v:adj2[x]){\n\t\tif (!vis[v]) dfs2(v,r);\n\t}\n}\n\nll dfs(int i){\n\tll re=0;\n\tvis[i]=true;\n\tfor (int &v:adj2[i]){\n\t\tif (vis[v]) re=max(re,coins2[v]);\n\t\telse re=max(re,dfs(v));\n\t}\n\treturn coins2[i]=re+coins2[i];\n}\nint main(){\n\tcin>>n>>m;\n\tcoins.assign(n,0);\n\tadj1.assign(n,vector<int>());\n\tadj2.assign(n,vector<int>());\n\tfor (int &v:coins)cin>>v;\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;cin>>a>>b;--a;--b;\n\t\tadj1[a].push_back(b);\n\t\tadj2[b].push_back(a);\n\t}\n\tvis.assign(n,false);\n\tfor (int i=0;i<n;++i) {\n\t\tif (!vis[i]) dfs1(i);\n\t}\n\tvis.clear();vis.assign(n,false);\n\tpar.assign(n,0);\n\tcnt=0;\n\tfor (int i=n-1;i>=0;--i){\n\t\tif (!vis[ord[i]]) {\n\t\t\tdfs2(ord[i],ord[i]);\n\t\t\t++cnt;\n\t\t}\n\t}\n\tvis.clear();vis.assign(cnt,false);\n\tadj2.clear();adj2.assign(cnt,vector<int>());\n\tcoins2.assign(cnt,0);\n\tfor (int i=0;i<n;++i){\n\t\tcoins2[par[i]]+=coins[i];\n\t\tfor (int &v:adj1[i]) \n\t\t\tif (par[i]!=par[v]) adj2[par[i]].push_back(par[v]);\n\t}\n\tll re=0;\n\tfor (int i=0;i<cnt;++i){\n\t\tif (vis[i]) continue;\n\t\tre=max(re,dfs(i));\n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "1687":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<vector<int>> adjList;\nint up[(int)(2e5+1.5)][20] {};\nint n,q;\n\nvoid dfs(int curr,int pre){\n\tup[curr][0]=pre;\n\tfor (int i=1;i<20;++i){\n\t\tif (up[curr][i-1]==-1) up[curr][i]=-1;\n\t\telse up[curr][i]=up[up[curr][i-1]][i-1];\n\t}\n\tfor (int &v:adjList[curr]){\n\t\tdfs(v,curr);\n\t}\n}\n\nint get(int node,int pos){\n\tfor (int i=19;i>=0;--i){\n\t\tif (node==-1) return node;\n\t\tif ((1<<i)&pos) \n\t\t\t{\n\t\t\t\tnode=up[node][i];\n\t\t\t}\n\t}\n\treturn node;\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tadjList.assign(n,vector<int>());\n\tfor (int i=1;i<n;++i){\n\t\tint a;cin>>a;\n\t\tadjList[a-1].push_back(i);\n\t}\n\tdfs(0,-1);\n\tfor (int i=0;i<q;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;\n\t\tint x=get(a,b);\n\t\tcout<<(x==-1?-1:x+1)<<'\\n';\n\t}\n\treturn 0;\n}",
  "1688":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<vector<int>> adjList;\nint up[(int)(2e5+1.5)][20] {};\nvector<int>tin,tout;\nint n,q,timer;\n\nvoid dfs(int curr,int pre){\n\ttin[curr]=timer++;\n\tup[curr][0]=pre;\n\tfor (int i=1;i<20;++i){\n\t\tup[curr][i]=up[up[curr][i-1]][i-1];\n\t}\n\tfor (int &v:adjList[curr]){\n\t\tdfs(v,curr);\n\t}\n\ttout[curr]=timer++;\n}\n\nbool is_ancestor(int par,int child){\n\treturn tin[par]<=tin[child]&&tout[par]>=tout[child];\n}\n\nint lca(int n1,int n2){\n\tif (is_ancestor(n1,n2)) return n1;\n\tif (is_ancestor(n2,n1)) return n2;\n\tfor (int i=19;i>=0;--i){\n\t\tif (!is_ancestor(up[n1][i],n2)) n1=up[n1][i];\n\t}\n\treturn up[n1][0];\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tadjList.assign(n,vector<int>());\n\ttin.assign(n,-1);\n\ttout.assign(n,-1);\n\ttimer=0;\n\tfor (int i=1;i<n;++i){\n\t\tint a;cin>>a;\n\t\tadjList[a-1].push_back(i);\n\t}\n\tdfs(0,0);\n\tfor (int i=0;i<q;++i){\n\t\tint a,b;\n\t\tcin>>a>>b;--a;--b;\n\t\tcout<<lca(a,b)+1<<'\\n';\n\t}\n\treturn 0;\n}",
  "1691":
    '#include <bits/stdc++.h>\n#define fastio ios::sync_with_stdio(false);cin.tie(NULL)\n#define ll long long\n#define sz(x) (int)((x).size())\n#define all(x) x.begin(),x.end()\nusing namespace std;\nvector<vector<array<int,2>>> adj;\nvector<vector<bool>> vis;\nint m,n;\nint pre=-1;\nvector<int> re;\n// euler circuit\t\nvoid dfs(int cur){\n    while (sz(adj[cur])){\n        int u=adj[cur].back()[0],nxtj=adj[cur].back()[1],i=sz(adj[cur])-1;\n        adj[cur].pop_back();\n        if (vis[cur][i]) continue;\n        vis[u][nxtj]=true;\n        dfs(u);\n    }\n\tre.push_back(cur);\n}\nint main(){\n\tfastio;\n\tcin>>n>>m;\n    adj.assign(n,vector<array<int,2>>());\n\tfor (int i=0;i<m;++i){\n\t\tint x,y;cin>>x>>y;--x;--y;\n        adj[y].push_back({x,sz(adj[x])});\n        adj[x].push_back({y,sz(adj[y])-1});\n\t}\n\tfor (int i=0;i<n;++i){\n        if (sz(adj[i])%2){\n            cout<<"IMPOSSIBLE\\n";\n            exit(0);\n        }\n    }\n    for (int i=0;i<n;++i){\n        vis.push_back(vector<bool>(sz(adj[i]),false));\n    }\n    dfs(0);\n    if (sz(re)!=m+1){\n        cout<<"IMPOSSIBLE\\n";\n        exit(0);\n    }\n    for (auto&s:re) cout<<s+1<<\' \';\n\n}',
  "1694":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll INF=1e18;\nvector<vector<ll>> cap;\nvector<vector<int>> adj;\nvector<int> par;\nint n,m;\n\nll bfs(){\n\tfill(par.begin(), par.end(),-1);\n\tqueue<array<ll,2>> q;\n\tq.push({0,INF});\n\twhile (!q.empty()){\n\t\tauto p=q.front();\n\t\tq.pop();\n\t\tfor (int &v:adj[p[0]]){\n\t\t\tif(par[v]!=-1) continue;\n\t\t\tif (cap[p[0]][v]){\n\t\t\t\tpar[v]=p[0];\n\t\t\t\tll nxt=min(p[1],cap[p[0]][v]);\n\t\t\t\tif (v==n-1) return nxt;\n\t\t\t\tq.push({(ll)v,nxt});\n\t\t\t}\n\t\t}\n\t}\n\treturn 0;\n}\n\nint main(){\n\tcin>>n>>m;\n\tcap.assign(n,vector<ll>(n,0));\n\tadj.assign(n,vector<int>());\n\tpar.assign(n,-1);\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;ll c;cin>>a>>b>>c;--a;--b;\n\t\tcap[a][b]+=c;\n\t\tadj[a].push_back(b);\n\t\tadj[b].push_back(a);\n\t}\n\tll x,re=0;\n\twhile (x=bfs()){\n\t\tint cur=n-1;\n\t\twhile (cur!=0){\n\t\t\tcap[par[cur]][cur]-=x;\n\t\t\tcap[cur][par[cur]]+=x;\n\t\t\tcur=par[cur];\n\t\t}\n\t\tre+=x;\n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "1695":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll INF=1e18;\nvector<vector<ll>> cap;\nvector<vector<int>> adj;\nvector<int> scut;\nvector<int> par;\nint n,m;\n\nbool bfs(){\n\tfill(par.begin(), par.end(),-1);\n\tqueue<int> q;\n\tq.push(0);\n\tpar[0]=0;\n\twhile (!q.empty()){\n\t\tint p=q.front();\n\t\tq.pop();\n\t\tfor (int &v:adj[p]){\n\t\t\tif(par[v]!=-1) continue;\n\t\t\tif (cap[p][v]){\n\t\t\t\tpar[v]=p;\n\t\t\t\tif (v==n-1) return true;\n\t\t\t\tq.push(v);\n\t\t\t}\n\t\t}\n\t}\n\treturn false;\n}\nvoid dfs(int cur){\n\tpar[cur]=1;\n\tscut.push_back(cur);\n\tfor (int&v:adj[cur]){\n\t\tif (par[v]==1) continue;\n\t\tif (cap[cur][v]) dfs(v);\n\t}\n}\nint main(){\n\tcin>>n>>m;\n\tcap.assign(n,vector<ll>(n,0));\n\tadj.assign(n,vector<int>());\n\tpar.assign(n,-1);\n\tfor (int i=0;i<m;++i){\n\t\tint a,b;cin>>a>>b;--a;--b;\n\t\tcap[a][b]+=1;\n\t\tcap[b][a]+=1;\n\t\tadj[a].push_back(b);\n\t\tadj[b].push_back(a);\n\t}\n\tint re=0;\n\twhile (bfs()){\n\t\tre+=1;\n\t\tint cur=n-1;\n\t\twhile (cur!=0){\n\t\t\tcap[par[cur]][cur]-=1;\n\t\t\tcap[cur][par[cur]]+=1;\n\t\t\tcur=par[cur];\n\t\t}\n\t}\n\tfill(par.begin(), par.end(),-1);\n\tdfs(0);\n\tcout<<re<<'\\n';\n\tfor (int &x:scut){\n\t\tfor (int &v:adj[x]){\n\t\t\tif (par[v]==1) continue;\n\t\t\tif (!cap[x][v]) {\n\t\t\t\tcout<<x+1<<' '<<v+1<<'\\n';\n\t\t\t}\n\t\t}\n\t}\n\treturn 0;\n}",
  "1696":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll INF=1e18;\nvector<vector<ll>> cap;\nvector<vector<int>> adj;\nvector<int> scut;\nvector<int> par;\nint n,m,k;\n\nbool bfs(){\n\tfill(par.begin(), par.end(),-1);\n\tqueue<int> q;\n\tq.push(0);\n\tpar[0]=0;\n\twhile (!q.empty()){\n\t\tint p=q.front();\n\t\tq.pop();\n\t\tfor (int &v:adj[p]){\n\t\t\tif(par[v]!=-1) continue;\n\t\t\tif (cap[p][v]){\n\t\t\t\tpar[v]=p;\n\t\t\t\tif (v==n+m+1) return true;\n\t\t\t\tq.push(v);\n\t\t\t}\n\t\t}\n\t}\n\treturn false;\n}\n\nint main(){\n\tcin>>n>>m>>k;\n\tcap.assign(n+m+2,vector<ll>(n+m+2,0));\n\tadj.assign(n+m+2,vector<int>());\n\tpar.assign(n+m+2,-1);\n\tvector<array<int,2>> kar;\n\tfor (int i=0;i<k;++i){\n\t\tint a,b;cin>>a>>b;b+=n;\n\t\tif (cap[a][b]) continue;\n\t\tcap[a][b]+=1;\n\t\tadj[a].push_back(b);\n\t\tadj[b].push_back(a);\n\t\tkar.push_back({a,b});\n\t}\n\tfor (int i=1;i<=n;++i) {\n\t\tcap[0][i]+=1;\n\t\tadj[0].push_back(i);\n\t\tadj[i].push_back(0);\n\t}\n\tfor (int i=n+1;i<=n+m;++i) {\n\t\tcap[i][n+m+1]+=1;\n\t\tadj[n+m+1].push_back(i);\n\t\tadj[i].push_back(n+m+1);\n\t}\n\tint re=0;\n\twhile (bfs()){\n\t\tre+=1;\n\t\tint cur=n+m+1;\n\t\twhile (cur!=0){\n\t\t\tcap[par[cur]][cur]-=1;\n\t\t\tcap[cur][par[cur]]+=1;\n\t\t\tcur=par[cur];\n\t\t}\n\t}\n\tcout<<re<<'\\n';\n\tfor (auto &p:kar){\n\t\tif (!cap[p[0]][p[1]]) {\n\t\t\tcout<<p[0]<<' '<<p[1]-n<<'\\n';\n\t\t}\n\t}\n\treturn 0;\n}",
  "1712":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define REP(i,a,b) for (int i=a;i<=b;i++)\r\nusing namespace std;\r\n\r\nconst ll MOD=1000000007;\r\nll expo(ll p, ll q,ll mod){\r\n\tll re=1;\r\n\twhile (q){\r\n\t\tif (q&1)re=re*p%mod;\r\n\t\tq>>=1;\r\n\t\tp=p*p%mod;\r\n\t}\r\n\treturn re%mod;\t\r\n}\r\n\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint t;\r\n\tcin>>t;\r\n\twhile(t--){\r\n\tll a,b,c;\r\n\tcin>>a>>b>>c;\r\n\tb=expo(b,c,MOD-1);\r\n\tcout<<expo(a,b,MOD)<<'\\n';\r\n\t}\r\n\treturn 0;\r\n}",
  "1713":
    "# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\r\n# define ten6 1e6+1.5\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    fastio;\r\n    int n,k;\r\n    cin>>n;\r\n    vector <vector<int>> div (ten6,vector<int>());\r\n    vector <ll> re (ten6,1);\r\n    for (ll i = 2;i<ten6;i++){\r\n        if (div[i].size()==0){\r\n            ll j;\r\n            for (j=i;j<ten6 ;j+=i)\r\n                    div[j].push_back(1);\r\n\r\n            j=i*i;\r\n            ll k =j;\r\n            while (j<ten6){\r\n                for (k=j;k<ten6 ;k+=j)\r\n                    div[k][div[k].size()-1]=div[k].back()+1;\r\n                j*=i;\r\n            }\r\n        }\r\n    }\r\n    for (int i=2;i<ten6;i++){\r\n        for (auto &v:div[i])re[i]*=v+1;\r\n    }\r\n    while (n--){\r\n        cin>>k;\r\n        cout<<re[k]<<'\\n';\r\n    }\r\n    return 0;    \r\n}",
  "1715":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nll binpow(ll x,ll y,ll m){\n\tll re=1;\n\twhile(y){\n\t\tif (y&1) re=(re*x)%m;\n\t\ty>>=1;\n\t\tx=(x*x)%m;\n\t}\n\treturn re;\n}\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tstring s;\n\tcin>>s;\n\tint n=s.size();\n\tll m=1000000007;\n\tint x[26]={0};\n\tfor (char &c: s)\n\t\tx[c-'a']+=1;\n\n\tvector<ll> invFac(n+1,1);\n\tvector<ll> fac(n+1,1);\n\tfor (int i=2;i<=n;++i){\n\t\tfac[i]=fac[i-1]*i%m;\n\t\tinvFac[i]=binpow(fac[i],m-2,m);\n\t}\n\tll re=fac[n];\n\tfor (int i=0;i<26;++i)\n\tre=(re*invFac[x[i]])%m;\n\tcout<<re<<'\\n';\n}",
  "1716":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nll binpow(ll x,ll y,ll m){\n\tll re=1;\n\twhile(y){\n\t\tif (y&1) re=(re*x)%m;\n\t\ty>>=1;\n\t\tx=(x*x)%m;\n\t}\n\treturn re;\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tint n,m;\n\tcin>>m>>n;\n\tm-=1;\n\tn+=m;\n\tll M=1000000007;\n\tvector<ll> invFac(n+1,1);\n\tvector<ll> fac(n+1,1);\n\tfor (int i=2;i<=n;++i){\n\t\tfac[i]=fac[i-1]*i%M;\n\t\tinvFac[i]=binpow(fac[i],M-2,M);\n\t}\n\tll re=fac[n]*invFac[m]%M*invFac[n-m]%M;\n\tcout<<re<<'\\n';\n}",
  "1717":
    '#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll MOD = 1000000007LL;\nconst int maxn = 1000000;\n\nll dp[maxn+1];\nll K[maxn+1];\nll invFac[maxn+1];\nll Fac[maxn+1];\nint n;\n\nll binpow(ll x, ll y){\n\tll re=1;\n\twhile (y){\n\t\tif (y&1) re = (re*x)%MOD;\n\t\tx=(x*x)%MOD;\n\t\ty>>=1;\n\t}\n\treturn re;\n}\n\nvoid preCalc(){\n\tinvFac[0]=Fac[0]=1;\n\tfor (ll i=1;i<n;++i){\n\t\tinvFac[i]= (binpow(i,MOD-2)*invFac[i-1])%MOD;\n\t\tFac[i]=Fac[i-1]*i%MOD;\n\t}\n}\n\nint main(){\n\tcin>>n;\n\tpreCalc();\n\tdp[1]=0;dp[2]=1;dp[3]=2;\n\tK[1]=K[2]=K[3]=0;\n\tfor (ll i=4;i<=n;++i){\n\t\tK[i] = ((K[i-1] * (i-1))%MOD +(dp[i-2]*invFac[i-2])%MOD * Fac[i-1]%MOD)%MOD;\n\t\tdp[i]= (K[i]+Fac[i-1])%MOD;\n\t}\n\t// for (int i=1;i<=n;++i){\n\t// \tcout<<"K: "<<K[i]<<", dp: "<<dp[i]<<endl;\n\t// }\n\tcout<<dp[n]<<\'\\n\';\n\treturn 0;\n}',
  "1722":
    "#include <bits/stdc++.h>\nusing namespace std;\ntypedef long long ll;\nconst ll MOD=1000000007;\nll n;\nll pow2(ll x, ll y){\n\treturn ((x*(y+MOD-x)%MOD)+(x*y%MOD))%MOD;\t\n}\npair<ll,ll> fib(ll y){\n\tif (y==0) return {0,1};\n\tpair<ll,ll> x = fib(y>>1);\n\tll fs = pow2(x.first,x.second);\n\tll sc = (pow2(x.second, x.first+x.second)+MOD-fs)%MOD;\n\tif (y&1) return {sc,(fs+sc)%MOD};\n\treturn {fs,sc};\n}\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n;\n\tcout<<fib(n).first<<'\\n';\n\treturn 0;\n}",
  "1723":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll MOD=1000000007;\nint n,m,k;\nvector<vector<ll>> mult(vector<vector<ll>>& x, vector<vector<ll>> &y){\n\tint n1=x.size(),m1=x[0].size(),n2=y.size(),m2=y[0].size();\n\tvector<vector<ll>> re (n1,vector<ll>(m2,0));\n\tfor (int i=0;i<n1;++i){\n\t\tfor (int j=0;j<m2;++j){\n\t\t\tfor (int k=0;k<m1;++k){\n\t\t\t\tre[i][j]=(re[i][j]+x[i][k]*y[k][j])%MOD;\n\t\t\t}\n\t\t}\n\t}\n\treturn re;\n}\n\nvector<vector<ll>> binpow(vector<vector<ll>> x , ll y){\n\tvector<vector<ll>> re(n,vector<ll>(n,0));\n\tfor (int i=0;i<n;++i) re[i][i]=1;\n\twhile (y){\n\t\tif (y&1) re=mult(re,x);\n\t\ty>>=1;\n\t\tx=mult(x,x);\n\t}\n\treturn re;\n}\n\nint main(){\n\tcin>>n>>m>>k;\n\tvector<vector<ll>> mat(n,vector<ll>(n,0));\n\t// for (int i=0;i<6;++i) mat[i][0]=1;\n\t// for (int i=0;i<5;++i) mat[i][i+1]=1;\n\tfor (int i=0;i<m;++i) {\n\t\tint a,b;cin>>a>>b;--a;--b;\n\t\t++mat[a][b];\n\t}\n\tmat=binpow(mat,k);\n\tvector<vector<ll>> init(1,vector<ll>(n,0));\n\tinit[0][0]=1;\n\tcout<<mult(init,mat)[0][n-1]<<'\\n';\n}",
  "1724":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll MOD=1e18+1000;\nint n,m,k;\nvector<vector<ll>> mult(vector<vector<ll>>& x, vector<vector<ll>> &y){\n\tint n1=x.size(),m1=x[0].size(),n2=y.size(),m2=y[0].size();\n\tvector<vector<ll>> re (n1,vector<ll>(m2,MOD));\n\tfor (int i=0;i<n1;++i){\n\t\tfor (int j=0;j<m2;++j){\n\t\t\tfor (int k=0;k<m1;++k){\n\t\t\t\tre[i][j]=min(re[i][j],x[i][k]+y[k][j]);\n\t\t\t}\n\t\t}\n\t}\n\treturn re;\n}\n\nvector<vector<ll>> binpow(vector<vector<ll>> x , ll y){\n\tvector<vector<ll>> re(n,vector<ll>(n,MOD));\n\tfor (int i=0;i<n;++i) re[i][i]=0;\n\twhile (y){\n\t\tif (y&1) re=mult(re,x);\n\t\ty>>=1;\n\t\tx=mult(x,x);\n\t}\n\treturn re;\n}\n\nvoid print(ll x){\n\tcout<<((x==MOD)?-1LL:x)<<'\\n';\t\n}\n\nint main(){\n\tcin>>n>>m>>k;\n\tvector<vector<ll>> mat(n,vector<ll>(n,MOD));\n\tfor (int i=0;i<m;++i) {\n\t\tint a,b;ll c;cin>>a>>b>>c;--a;--b;\n\t\tmat[a][b]=min(c,mat[a][b]);\n\t}\n\tmat=binpow(mat,k);\n\tprint(mat[0][n-1]);\n}",
  "1725":
    '#include <bits/stdc++.h>\nusing namespace std;\nint n,a,b;\nvoid solve(){\n\tint mxn=6*n;\n\tvector<vector<double>> dp(n+1,vector<double>(mxn+1));\n\tfor (int i=0;i<=mxn;++i) dp[0][i]=1;\n\tfor (int i=1;i<=n;++i){\n\t\tfor (int k=1;k<=mxn;++k){\n\t\t\tfor (int j=1;j<=6;++j){\n\t\t\t\tif (j<=k) dp[i][k]+=dp[i-1][k-j]/6.0;\n\t\t\t\telse break;\n\t\t\t}\n\t\t}\n\t}\n\tprintf("%.6f\\n",dp[n][b]-dp[n][a-1]);\n}\n\nint main(){\n\tscanf("%d %d %d",&n,&a,&b);\n\tsolve();\n\treturn 0;\n}',
  "1726":
    '#include <bits/stdc++.h>\nusing namespace std;\nint k;\nstruct br{\n\tarray<double,64> board;\n\tpublic: br(){\n\t\tboard.fill(0);\n\t}\n};\narray<int,2>dir[]={{-1,0},{1,0},{0,-1},{0,1}};\nvoid solve(){\n\tvector<vector<br>> dp(64,vector<br>(k+1,br()));\n\tfor (int i=0;i<64;++i) dp[i][0].board[i]=1;\n\tfor (int i=1;i<=k;++i){\n\t\tfor (int r=0;r<8;++r){\n\t\t\tfor (int c=0;c<8;++c){\n\t\t\t\tint cnt=0;\n\t\t\t\tfor (int j=0;j<4;++j){\n\t\t\t\t\tint nr=r+dir[j][0],nc=c+dir[j][1];\n\t\t\t\t\tif (nr<0||nr>=8||nc<0||nc>=8) continue;\n\t\t\t\t\t++cnt;\n\t\t\t\t}\n\t\t\t\tfor (int j=0;j<4;++j){\n\t\t\t\t\tint nr=r+dir[j][0],nc=c+dir[j][1];\n\t\t\t\t\tif (nr<0||nr>=8||nc<0||nc>=8) continue;\n\t\t\t\t\tfor (int pos=0;pos<64;++pos){\n\t\t\t\t\t\tdp[r*8+c][i].board[pos]+=dp[nr*8+nc][i-1].board[pos]/cnt;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tdouble re=0;\n\tfor (int i=0;i<64;++i){\n\t\tdouble tmp=1;\n\t\tfor (int j=0;j<64;++j)\n\t\t\ttmp*=(1-dp[j][k].board[i]);\n\t\tre+=tmp;\n\t}\n\tprintf("%.6f\\n",re);\n}\n\nint main(){\n\tscanf("%d",&k);\n\tsolve();\n\treturn 0;\n}',
  "1727":
    '#include <bits/stdc++.h>\nusing namespace std;\nint n,k;\nvoid solve(){\n\tvector<vector<double>> dp(n+1,vector<double>(k+1,0));\n\tdp[0][0]=1;\n\tfor (int i=1;i<=n;++i){\n\t\tdouble acu=dp[i-1][0];\n\t\tfor (int j=1;j<=k;++j){\n\t\t\tdp[i][j]+=acu/k+j*dp[i-1][j]/k;\n\t\t\tacu+=dp[i-1][j];\n\t\t}\n\t}\n\tdouble re=0;\n\tfor (int i=1;i<=k;++i) {\n\t\tre+=i*dp[n][i];\n\t}\n\tprintf("%.6f\\n",re);\n}\n\nint main(){\n\tscanf("%d %d",&n,&k);\n\tsolve();\n\treturn 0;\n}',
  "1728":
    '#include <bits/stdc++.h>\nusing namespace std;\nint n;\nvoid solve(){\n\tvector<int> r(n);\n\tfor (int&v:r)cin>>v;\n\tdouble re=0;\n\tfor (int i=0;i<n;++i){\n\t\tfor (int j=i+1;j<n;++j){\n\t\t\tfor (int a=r[i];a>1;--a){\n\t\t\t\tre+=1.0*min(a-1,r[j])/r[j]/r[i];\n\t\t\t}\n\t\t}\n\t}\n\tprintf("%.6f\\n",re);\n}\nint main(){\n\tscanf("%d",&n);\n\tsolve();\n\treturn 0;\n}',
  "1729":
    "#include <bits/stdc++.h>\nusing namespace std;\nconst int maxn=1000000;\nbool dp[maxn+1]={0};\nint main(){\n\tint n,k;cin>>n>>k;\n\tvector<int> mv(k);\n\tfor (int &v:mv)cin>>v;\n\tdp[0]=true;\n\tfor(int i=1;i<=n;++i){\n\t\tfor (int&v:mv) {\n\t\t\tif (v<=i&&dp[i-v]) {\n\t\t\t\tdp[i]=true;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\tdp[i]=!dp[i];\n\t\tcout<<((dp[i])?'L':'W');\n\t}\n\tcout<<'\\n';\n\treturn 0;\n}",
  "1731":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll MOD=1000000007;\nstruct Node{\n\tint val;\n\tvector<Node*>child;\npublic:\n\tNode():val(0){\n\t\tchild.assign(26,nullptr);\n\t};\n\tNode(int val):val(val)\t{\n\t\tchild.assign(26,nullptr);\n\t};\n\t~Node(){\n\t\tfor (auto x:child)\n\t\t\tif (x) delete(x);\n\t}\n};\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tstring s;cin>>s;\n\tint n;cin>>n;\n\tvector<string> aS(n);\n\tNode * trie=new Node;\n\tfor (string &s1:aS){\n\t\tcin>>s1;\n\t\treverse(s1.begin(), s1.end());\n\t\tNode **tmp=&trie;\n\t\tfor (char &c:s1){\n\t\t\ttmp=&((*tmp)->child[c-'a']);\n\t\t\tif((*tmp)==nullptr) *tmp=new Node;\n\t\t}\n\t\t(*tmp)->val+=1;\n\t}\n\tvector<ll> dp(s.size()+1,0);\n\tdp[0]=1;\n\tfor (int i=1;i<=s.size();++i){\n\t\tNode **x=&trie;\n\t\tfor (int j=i-1;j>=0;--j){\n\t\t\tx=&((*x)->child[s[j]-'a']);\n\t\t\tif (!(*x)) break;\n\t\t\tdp[i]=(dp[i]+dp[j]*((*x)->val)%MOD)%MOD;\n\t\t}\n\t}\n\tdelete trie;\n\tcout<<dp[(int)s.size()]<<'\\n';\t\n\treturn 0;\n}",
  "1732":
    "#include <bits/stdc++.h>\nusing namespace std;\nstring t;\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>t;\n\tvector<int>pi(t.size()+1,-1);\n\tfor (int i=1;i<=t.size();++i){\n\t\tint k=pi[i-1];\n\t\twhile (k>=0&& t[i-1]!=t[k]) k=pi[k];\n\t\tpi[i]=k+1;\n\t}\n\tint k=pi[t.size()];\n\tvector<int> re;\n\twhile (k>0){\n\t\tre.push_back(k);\n\t\tk=pi[k];\n\t}\n\tfor (int i=1;i<=re.size();++i){\n\t\tcout<<re[re.size()-i]<<' ';\n\t}\n\treturn 0;\n}",
  "1733":
    "#include <bits/stdc++.h>\nusing namespace std;\nstring t;\nint n;\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>t;\n\tn=t.size();\n\tvector<int>z(n,0);\n\tfor (int i=1,l=0,r=0;i<n;++i){\n\t\tif (i<=r) z[i]=min(r-i+1,z[i-l]);\n\t\twhile (i+z[i]<n && t[z[i]]==t[z[i]+i]) ++z[i];\n\t\tif (z[i]+i-1>r){\n\t\t\tr=z[i]+i-1;\n\t\t\tl=i;\n\t\t}\n\t\tif (z[i]+i==n) cout<<i<<' ';\n\t}\n\tcout<<n<<'\\n';\n\treturn 0;\n}",
  "1734":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nint n,q;\nvector<int> a,F;\nmap<int,int> lvis;\n\nvoid increase(int pos, int add){\n\tfor (int i=pos;i<n;i=i|(i+1)){\n\t\tF[i]+=add;\n\t}\n}\n\nint sum1(int x){\n\tint re=0;\n\tfor (int i=x;i>=0;i=(i&(i+1))-1){\n\t\tre+=F[i];\n\t}\n\treturn re;\n}\nint sum(int l,int r){\n\treturn sum1(r)-sum1(l-1);\n}\n\nint main(){\n\tcin>>n>>q;\n\ta.assign(n,0);\n\tfor (int &v:a) cin>>v;\n\tvector<array<int,3>> Q(q);\n\tfor (int i=0;i<q;++i){\n\t\tcin>>Q[i][1]>>Q[i][0];\n\t\tQ[i][2]=i;\n\t\t--Q[i][1];--Q[i][0];\n\t}\n\tsort(Q.begin(),Q.end());\n\tvector<int> ans(q);\n\tint curr=0;\n\tF.assign(n,0);\n\tfor (auto &qu:Q){\n\t\twhile (curr<=qu[0]) {\n\t\t\tint x=lvis[a[curr]];\n\t\t\tif (x) {\n\t\t\t\tincrease(x-1,-1);\n\t\t\t}\n\t\t\tlvis[a[curr]]=curr+1;\n\t\t\tincrease(curr,1);\n\t\t\t++curr;\n\t\t}\n\t\tans[qu[2]]=sum(qu[1],qu[0]);\n\t}\n\tfor (int &r:ans) cout<<r<<'\\n';\n\treturn 0;\n}",
  "1735":
    "#include <bits/stdc++.h>\n#define fastio ios::sync_with_stdio(false);cin.tie(NULL)\n#define sz(x) (int)((x).size())\n#define ll long long\nusing namespace std;\n\nconst ll M=998244353LL;\nstruct Node{\n\tll s,a,inc;\n    Node(ll s,ll a,ll inc){\n        this->s=s;\n        this->a=a;\n        this->inc=inc;\n\t}\n};\n    \nstruct ST{\n\tvector<ll> a;\n\tvector<Node> st;\n\tll n;\n    ST(vector<ll>&a,ll n){\n        st.assign(n*4,Node(0,0,0));\n        this->a=a;\n        buildTree(0,n-1,1);\n\t}\n    void buildTree(ll tl,ll tr,ll v){\n        if (tl==tr){\n            st[v]=Node(a[tl],0,0);\n            return;\n\t\t}\n        ll mid=(tl+tr)>>1;\n        buildTree(tl,mid,v*2);\n        buildTree(mid+1,tr,v*2+1);\n        st[v].s=st[v*2].s+st[v*2+1].s;\n\t}\n    void ass(ll tl,ll tr,ll l,ll r,ll v,ll val){\n        if (l>r) return;\n        push(v,tr-tl+1);\n        if (tl==l && tr==r){\n            st[v].a=val;\n            st[v].s=val*(r-l+1);\n            return;\n\t\t}\n        ll mid=(tl+tr)>>1;\n        ass(tl,mid,l,min(mid,r),v*2,val);\n        ass(mid+1,tr,max(mid+1,l),r,v*2+1,val);\n        st[v].s=st[v*2].s+st[v*2+1].s;\n\t}\n\tvoid add(ll tl,ll tr,ll l,ll r,ll v,ll val){\n        if (l>r) return;\n        push(v,tr-tl+1);\n        if (tl==l && tr==r){\n            st[v].inc=val;\n            st[v].s+=val*(r-l+1);\n            return;\n\t\t}\n        ll mid=(tl+tr)>>1;\n        add(tl,mid,l,min(mid,r),v*2,val);\n        add(mid+1,tr,max(mid+1,l),r,v*2+1,val);\n        st[v].s=st[v*2].s+st[v*2+1].s;\n\t}\n    ll query(ll tl,ll tr,ll l,ll r,ll v){\n        if (l>r) return 0;\n        if (tl==l && tr==r) return st[v].s;\n        push(v,tr-tl+1);\n        ll mid=(tl+tr)>>1;\n        ll re=0;\n        re+=query(tl,mid,l,min(mid,r),v*2);\n        re+=query(mid+1,tr,max(mid+1,l),r,v*2+1);\n        return re;\n\t}\n    void push(ll v,ll n){\n        if (n==1) return;\n        if (st[v].a){\n            st[v*2].a=st[v*2+1].a=st[v].a;\n            st[v*2].s=(n+1)/2*st[v].a;\n\t\t\tst[v*2+1].s=n/2*st[v].a;\n            st[v].a=0;\n\t\t\tst[v*2].inc=st[v*2+1].inc=0;\n\t\t}\n\t\telse if (st[v].inc){\n            st[v*2].inc+=st[v].inc;\n\t\t\tst[v*2+1].inc+=st[v].inc;\n            st[v*2].s+=(n+1)/2*st[v].inc;\n\t\t\tst[v*2+1].s+=n/2*st[v].inc;\n            st[v].inc=0;\n\t\t\tif (st[v*2].a){\n\t\t\t\tst[v*2].a+=st[v*2].inc;\n\t\t\t\tst[v*2].inc=0;\n\t\t\t}\n\t\t\tif (st[v*2+1].a){\n\t\t\t\tst[v*2+1].a+=st[v*2+1].inc;\n\t\t\t\tst[v*2+1].inc=0;\n\t\t\t}\n\t\t}\n\t}\n};\nint main(){\n\tfastio;\n\tint n,q;cin>>n>>q;\n\tvector<ll> a(n);\n\tfor (auto &v:a) cin>>v;\n\tST st=ST(a,n);\n\tfor (ll i=0;i<q;++i){\n\t\tint t,x,y;cin>>t>>x>>y;\n\t\tif (t==3){\n\t\t\tcout<<st.query(0,n-1,x-1,y-1,1)<<'\\n';\n\t\t}\n\t\telse if (t==1){\n\t\t\tint z;cin>>z;\n\t\t\tst.add(0,n-1,x-1,y-1,1,z);\n\t\t}\n\t\telse {\n\t\t\tint z;cin>>z;\n\t\t\tst.ass(0,n-1,x-1,y-1,1,z);\n\t\t}\n\t}\n}",
  "1739":
    "#include <bits/stdc++.h>\nusing namespace std;\nint n,q;\nvector<vector<int>> F;\nvoid increase(int r,int c,int add){\n\tfor (int i=r;i<n;i=i|(i+1)){\n\t\tfor (int j=c;j<n;j=j|(j+1)){\n\t\t\tF[i][j]+=add;\n\t\t}\n\t}\n}\nint sum(int r,int c){\n\tint re=0;\n\tfor (int i=r;i>=0;i=(i&(i+1))-1){\n\t\tfor (int j=c;j>=0;j=(j&(j+1))-1){\n\t\t\tre+=F[i][j];\n\t\t}\n\t}\n\treturn re;\n}\nint get(int r1,int c1,int r2,int c2){\n\treturn sum(r2,c2)-sum(r2,c1-1)-sum(r1-1,c2)+sum(r1-1,c1-1);\n}\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\tF.assign(n,vector<int>(n,0));\n\tvector<string> br(n);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>br[i];\n\t\tfor (int j=0;j<n;++j){\n\t\t\tif (br[i][j]=='*') increase(i,j,1);\n\t\t}\n\t}\n\tfor (int i=0;i<q;++i){\n\t\tint t;cin>>t;\n\t\tif (t==2){\n\t\t\tint r1,c1,r2,c2;cin>>r1>>c1>>r2>>c2;--r1;--r2;--c1;--c2;\n\t\t\tcout<<get(r1,c1,r2,c2)<<'\\n';\n\t\t}\n\t\telse{\n\t\t\tint r,c;cin>>r>>c;--r;--c;\n\t\t\tint x=1;\n\t\t\tif (br[r][c]=='*'){\n\t\t\t\tx=-1;\n\t\t\t\tbr[r][c]='.';\n\t\t\t}\n\t\t\telse br[r][c]='*';\n\t\t\tincrease(r,c,x);\n\t\t}\n\t}\n\treturn 0;\n}",
  "1744":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst int MOD = 1000000007;\n\nint main(){\n\tint a,b;\n\tcin>>a>>b;\n\tint mx=max(a,b);\n\tvector <vector<int>> dp (mx+1,vector<int>(mx+1,MOD));\n\tfor (int i=1;i<=mx;++i) dp[i][i]=0;\n\tfor (int i=1;i<=mx;++i) {\n\t\tfor (int j=i;j<=mx;++j) {\n\t\t\tfor (int k=1;k<=mx;++k) {\n\t\t\t\tif (k+j<=mx) dp[k+j][i]=dp[i][k+j]=min(dp[i][k+j],dp[i][j]+dp[i][k]+1);\n\t\t\t\tif (k+i<=mx) dp[k+i][j]=dp[j][k+i]=min(dp[j][k+i],dp[i][j]+dp[j][k]+1);\n\t\t\t}\n\t\t}\n\t}\n\tcout<<dp[a][b]<<endl;\n    return 0;\n}",
  "1745":
    "# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)\n# define MOD 1000000007\nusing namespace std;\nint n;\nvector<int> lsCoin;\nvector<int> dp;\n\nint main(){\n\tfastio;\n    cin>>n;\n    lsCoin.assign(n,0);\n    int s=0;\n    for (int i=0;i<n;++i) {\n        cin>>lsCoin[i];\n        s+=lsCoin[i];\n    }\n    dp.assign(s+1,-1);\n    dp[0]=1;\n    vector<int> allSum;\n    for (int k=0;k<lsCoin.size();++k){\n        for (int i=s;i>=1;--i) {\n            if (lsCoin[k]<=i&&dp[i-lsCoin[k]]==1){\n                dp[i]=1;\n            }\n        }\n    }\n    for (int i=1;i<=s;++i) {\n        if (dp[i]==1)\n                allSum.push_back(i);\n    }\n    cout<<allSum.size()<<'\\n';\n    for (int i=0;i<allSum.size();++i){\n        if (i!=0) cout<<' ';\n        cout<<allSum[i];\n    }\n    cout<<'\\n';\n\treturn 0;\n}\n\n",
  "1746":
    '# include <bits/stdc++.h>\n# define ll long long\n# define all(x) x.begin(), x.end()\n# define fastio ios_base::sync_with_stdio(false); cin.tie(NULL)\n# define MOD 1000000007\n# define ten6 1000002\nusing namespace std;\nvector<vector<ll>> dp;\nvector<vector<ll>> coeff;\nint n,m;\n\nvoid setCoeff(){\n    coeff[0][0]=1;\n    for(int i=1;i<=m;++i){\n        // coeff[i] = coeff[i-1]<<1 - coeff[i-1] - coeff[i-2]\n        coeff[i][0]=-coeff[i-1][0];\n        for (int k=1;k<=i;++k) {\n            coeff[i][k]=(coeff[i-1][k-1]-coeff[i-1][k])%MOD;\n        }\n        if (i>1) {\n            for (int k=0;k<=i-2;++k) {\n                coeff[i][k]=(coeff[i][k]-coeff[i-2][k])%MOD;\n            }   \n        }\n    }\n}\n\nvoid setDP(){\n    // dp[dis][0->m]\n    dp[0][0]=1;\n    for(int i=1;i<=n+m;++i){\n        // dp[i][k] = dp[i-1][k] + dp[i-1][k-1] +dp[i-1][k+1]\n        for (int k=0;k<=m;++k) {\n            ll ans=dp[i-1][k];\n            if (k<m) ans+=dp[i-1][k+1];\n            if (k>0) ans+=dp[i-1][k-1];\n            ans%=MOD;\n            dp[i][k]=ans;\n        }\n    }\n}\n\nll getShit(int from, int to, int dis) {\n    if (dis==1) return from==-1 || abs(to-from)<=1;\n    ll ans=0;\n    for (int i=0;i<=m;++i) {\n        ans=(ans+dp[dis+i][to]*coeff[from][i]%MOD)%MOD;\n    }\n    return ans;\n}\nint main()\n{\n    // freopen("test_input.txt","r",stdin);\n    fastio; \n    cin>>n>>m;\n    --m;\n    dp.assign(n+m+1,vector<ll>(m+1,0));\n    coeff.assign(m+1,vector<ll>(m+1,0));\n    setCoeff();\n    setDP();\n    vector<int> arr(n);\n    for (int i=0;i<n;++i) cin>>arr[i];\n    ll re=1;\n    int from=-1,to=0;\n    while (from<n) {\n        while(to<n&&arr[to]==0) ++to;\n        if (from==-1 && to==n) {\n            ll tmp=0;\n            for (int i=0; i<=m; ++i) {\n                for (int k=0; k<=m; ++k) {\n                    tmp=(tmp+getShit(i,k,n-1))%MOD;\n                }\n            }\n            re=(re*tmp)%MOD;\n            break;\n        }\n        if (from==-1) {\n            if (to!=0) {\n                ll tmp=0;\n                for (int i=0; i<=m; ++i) {\n                    tmp=(tmp+getShit(i,arr[to]-1,to))%MOD;\n                }\n                re=(re*tmp)%MOD;\n            }\n        }\n        else if (to==n) {\n            if (to-from!=1){\n                ll tmp=0;\n                for (int i=0; i<=m; ++i) {\n                    tmp=(tmp+getShit(arr[from]-1,i,to-from-1))%MOD;\n                }\n                re=(re*tmp)%MOD;\n            }\n        }\n        else re=(re*getShit(arr[from]-1,arr[to]-1,to-from))%MOD;\n        from=to;\n        ++to;\n    }\n    if (re<0) re+=MOD;\n    cout<<re<<\'\\n\';\n    return 0;\n}',
  "1749":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nint n,m;\nvector<int> a;\nvector<int> v;\nvector<int> st;\nvoid buildTree(int v,int tl, int tr){\n\tif (tl==tr){\n\t\tst[v]=a[tl];\n\t}\n\telse{\n\t\tint mid = (tl+tr)>>1;\n\t\tbuildTree(v*2,tl,mid);\n\t\tbuildTree(v*2+1,mid+1,tr);\n\t\tst[v]=st[v*2]+st[v*2+1];\n\t}\n}\nint get(int v,int l, int r, int tl, int tr){\n\tif (l==tl&&r==tr){\n\t\treturn st[v];\n\t}\n\tif (l>r) return 0;\n\tint mid=(tl+tr)>>1;\n\treturn get(v*2,l,min(mid,r),tl,mid)+get(v*2+1,max(l,mid+1),r,mid+1,tr);\n}\nvoid update(int v,int tl, int tr, int val,int pos){\n\tif (tl==tr){\n\t\tst[v]=val;\n\t\treturn;\n\t}\n\tint mid=(tl+tr)>>1;\n\tif (pos<=mid) update(v*2,tl,mid,val,pos);\n\telse update(v*2+1,mid+1,tr,val,pos);\n\tst[v]=st[v*2]+st[v*2+1];\n}\n\nint getVal(int tg){\n\tint l=0,r=n-1;\n\twhile (l<=r){\n\t\tint mid = (l+r)>>1;\n\t\tint mx=get(1,0,mid,0,n-1);\n\t\tif (mx>=tg) {\n\t\t\tr=mid-1;\n\t\t}\n\t\telse {\n\t\t\tl=mid+1;\n\t\t}\n\t}\n\tupdate(1,0,n-1,0,l);\n\treturn v[l];\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n;\n\ta.assign(n,1);\n\tv.assign(n,0);\n\tst.assign(4*n,0);\n\tfor (int i=0;i<n;++i) {\n\t\tcin>>v[i];\n\t}\n\tbuildTree(1,0,n-1);\n\tfor (int i=0;i<n;++i){\n\t\tint r;cin>>r;\n\t\tcout<<getVal(r)<<' ';\n\t}\n\treturn 0;\n}\n",
  "1750":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nint n,m,timer;\nvector<int> p;\nvector<array<int,3>> idx;\nvector<vector<int>> l;\nvector<vector<int>>up;\n\nvoid genLine(int x){\n\tvector<int> v;\n\twhile (idx[x][0]>0){\n\t\tv.push_back(x);\n\t\tidx[x][0]=-2;\n\t\tx=p[x];\n\t}\n\tif (idx[x][0]!=0) x=-1;\n\telse v.push_back(x);\n\n \treverse(v.begin(),v.end());\n \tfor (int& c:v){\n \t\tif (c!=x) up[c][0]=p[c];\n \t\telse up[c][0]=c;\n \t\tfor (int i=1;i<20;++i){\n \t\t\tup[c][i]=up[up[c][i-1]][i-1];\n \t\t}\n \t}\n\n}\n\nvoid genCycle(int x){\n\tint pos=l.size();\n\tint turtle=p[x], rabbit=p[p[x]];\n\twhile (turtle!=rabbit){\n\t\tturtle=p[turtle];\n\t\trabbit=p[p[rabbit]];\n\t}\n\tint y=x;\n\t\n\twhile (y!=turtle){\n\t\ty=p[y];\n\t\tturtle=p[turtle];\n\t}\n\n\tl.push_back({y});\n\tvector<int> &cycle=l[pos];\n\tidx[y]={0,pos,0};\n\tint y1=p[y];\n\tint tmp=1;\n\twhile (y1!=y) {\n\t\tidx[y1]={0,pos,tmp++};\n\t\tcycle.push_back(y1);\n\t\ty1=p[y1];\n\t}\n\n \tgenLine(x);\n}\n \nvoid merge(int x){\n\tidx[x][0]=timer;\n\tint tmp=p[x];\n\twhile (idx[tmp][0]==-1){\n\t\tidx[tmp][0]=timer;\n\t\ttmp=p[tmp];\n\t}\n\tint a=idx[tmp][0];\n\tif (a==timer) genCycle(x);\n\telse genLine(x);\n\t++timer;\n}\n\nbool checkroot(int x){\n\treturn idx[x][0]==0;\n}\nint get(int x, int k){\n\tif (idx[x][0]==0){\n\t\tint & b=idx[x][1], &c=idx[x][2];\n\t\treturn l[b][(c+k)%(l[b].size())];\n\t}\n\telse {\n\t\tfor(int i=19;k>0&&i>=0;--i){\n\t\t\tif ((1<<i)<=k&&!checkroot(up[x][i])) {\n\t\t\t\tx=up[x][i];\n\t\t\t\tk-=(1<<i);\n\t\t\t}\n\t\t}\n\t\tif (k==0) return x;\n\t\telse return get(up[x][0],k-1);\n\t}\n}\n\nvoid solve(){\n\tidx.assign(n,{-1,-1,-1});\n\tup.assign(n,vector<int>(20,-1));\n\ttimer=1;\n\tfor (int i=0;i<n;++i){\n\t\tif (idx[i][0]==-1) merge(i);\n\t}\n\tfor (int i=0;i<m;++i){\n\t\tint x,k;\n\t\tcin>>x>>k;\n\t\tcout<<get(x-1,k)+1<<'\\n';\n\t}\n}\n \nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n>>m;\n\tp.assign(n,-1);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>p[i];\n\t\t--p[i];\n\t}\n\tsolve();\n\treturn 0;\n}",
  "1751":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nint n,m,timer,timer1;\nvector<int> p,tin,tout;\nvector<array<int,3>> idx;\nvector<vector<int>> l,up,adjList;\n\nvoid genLine(int x){\n\tvector<int> v;\n\twhile (idx[x][0]>0){\n\t\tv.push_back(x);\n\t\tidx[x][0]=-2;\n\t\tx=p[x];\n\t}\n\tif (idx[x][0]!=0) x=-1;\n \treverse(v.begin(),v.end());\n \tfor (int& c:v){\n \t\tif (p[c]!=x) adjList[p[c]].push_back(c);\n \t\telse adjList[l[idx[x][1]][0]].push_back(c);\n \t}\n\n}\n\nvoid genCycle(int x){\n\tint pos=l.size();\n\tint turtle=p[x], rabbit=p[p[x]];\n\twhile (turtle!=rabbit){\n\t\tturtle=p[turtle];\n\t\trabbit=p[p[rabbit]];\n\t}\n\tint y=x;\n\t\n\twhile (y!=turtle){\n\t\ty=p[y];\n\t\tturtle=p[turtle];\n\t}\n\n\tl.push_back({y});\n\tvector<int> &cycle=l[pos];\n\tidx[y]={0,pos,0};\n\tint y1=p[y];\n\tint tmp=1;\n\twhile (y1!=y) {\n\t\tidx[y1]={0,pos,tmp++};\n\t\tcycle.push_back(y1);\n\t\ty1=p[y1];\n\t}\n\n \tgenLine(x);\n}\n\nvoid merge(int x){\n\tidx[x][0]=timer;\n\tint tmp=p[x];\n\twhile (idx[tmp][0]==-1){\n\t\tidx[tmp][0]=timer;\n\t\ttmp=p[tmp];\n\t}\n\tint a=idx[tmp][0];\n\tif (a==timer) genCycle(x);\n\telse genLine(x);\n\t++timer;\n}\n\nvoid dfs(int x,int pre){\n\ttin[x]=timer1++;\n\tup[x][0]=pre;\n\tfor (int i=1;i<20;++i)\n\t\tup[x][i]=up[up[x][i-1]][i-1];\n\n\tfor (int &c:adjList[x])\tdfs(c,x);\n\ttout[x]=timer1++;\n}\n\nbool is_ancestor(int x,int y){\n\treturn tin[x]<=tin[y]&&tout[x]>=tout[y];\n}\n\nint get(int x){\n\tint &a=idx[x][0],&b=idx[x][1];\n\tif (a==0)\n\t\treturn l[b].size();\n\t\t\t\n\tint re=0;\n\tfor (int i=19;i>=0;--i){\n\t\tif (idx[up[x][i]][0]==0)continue;\n\t\tx=up[x][i];\n\t\tre+=(1<<i);\n\t}\n\tx=p[x];\n\t++re;\n\treturn re+get(x);\n}\n\nvoid solve(){\n\tidx.assign(n,{-1,-1,-1});\n\tup.assign(n,vector<int>(20,-1));\n\tadjList.assign(n,vector<int>());\n\ttin.assign(n,-1);\n\ttout.assign(n,-1);\n\ttimer=timer1=1;\n\tfor (int i=0;i<n;++i){\n\t\tif (idx[i][0]==-1) merge(i);\n\t}\n\tfor (int i=0;i<n;++i){\n\t\tif (idx[i][0]==0&&idx[i][2]==0) dfs(i,i);\n\t}\n\tfor (int i=0;i<n;++i){\n\t\tcout<<get(i)<<'\\n';\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(0);cin.tie(NULL);\n\tcin>>n;\n\tp.assign(n,-1);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>p[i];\n\t\t--p[i];\n\t}\n\tsolve();\n\treturn 0;\n}",
  "1753":
    "#include <bits/stdc++.h>\nusing namespace std;\nstring s,t;\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>s>>t;\n\tvector<int>pi(t.size()+1,-1);\n\tfor (int i=1;i<=t.size();++i){\n\t\tint k=pi[i-1];\n\t\twhile (k>=0&& t[i-1]!=t[k]) k=pi[k];\n\t\tpi[i]=k+1;\n\t}\n\tint re=0,pre=0;\n\tfor (int i=0;i<s.size();++i){\n\t\twhile (pre>=0&&t[pre]!=s[i]) pre=pi[pre];\n\t\t++pre;\n\t\tif (pre==t.size()){\n\t\t\t++re;\n\t\t\tpre=pi[pre];\n\t\t} \n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "1754":
    '# include <bits/stdc++.h>\r\n# define ll long long\r\n# define all(x) x.begin(), x.end()\r\nusing namespace std;\r\nll md=1000000007;\r\nbool solve(int a,int b){\r\n\tif (a>b) swap(a,b);\r\n\ta=a*2-b;\r\n\treturn !(a%3)&&a>=0;\r\n}\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tint tc;\r\n\tcin>>tc;\r\n\twhile(tc--){\r\n\t\tint a,b;\r\n\t\tcin>>a>>b;\r\n\t\tif (solve(a,b)) cout<<"YES\\n";\r\n\t\telse cout<<"NO\\n";\r\n\t}\r\n\treturn 0;\r\n}',
  "1755":
    "# include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){\r\n\tios_base::sync_with_stdio(false);\r\n\tcin.tie(NULL);\r\n\tstring s;\r\n\tcin>>s;\r\n\tunordered_map <char,int> a;\r\n\tfor (auto c:s){\r\n\t\ta[c]++;\r\n\t}\r\n\tstring s1 (s.size(),' ');\r\n\tint l=0,r=s.size()-1;\r\n\tint m=-1;\r\n\tif (s.size()%2) m=(l+r)/2;\r\n\tfor (auto x:a){\r\n\t\tif (x.second%2){\r\n\t\t\tif (m!=-1){\r\n\t\t\t\ts1[m]=x.first;\r\n\t\t\t\tm=-1;\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tcout<<\"NO SOLUTION\\n\";\r\n\t\t\t\treturn 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\tfor (int c=x.second;c>=2;c-=2){\r\n\t\t\ts1[l++]=s1[r--]=x.first;\r\n\t\t}\t\r\n\t}\r\n\tcout<<s1<<endl;\r\n\treturn 0;\r\n}",
  "2064":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nll M=1000000007;\nvector<ll> invFac;\nvector<ll> fac;\n\nll binpow(ll x,ll y,ll m){\n\tll re=1;\n\twhile(y){\n\t\tif (y&1) re=(re*x)%m;\n\t\ty>>=1;\n\t\tx=(x*x)%m;\n\t}\n\treturn re;\n}\nll C(int n, int k){\n\treturn fac[n]*invFac[k]%M*invFac[n-k]%M;\n}\nint main(){\n\tint n;\n\tcin>>n;\n\tif (n%2){\n\t\tcout<<0<<'\\n';\n\t\treturn 0;\n\t}\n\tfac.assign(n+1,1);\n\tinvFac.assign(n+1,1);\n\tfor (int i=2;i<=n;++i){\n\t\tfac[i]=fac[i-1]*i%M;\n\t\tinvFac[i]=binpow(fac[i],M-2,M);\n\t}\n\tn/=2;\n\tll re=C(2*n,n)-C(2*n,n-1)+M;\n\tre%=M;\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "2136":
    "#include <bits/stdc++.h>\n#define fastio ios::sync_with_stdio(false);cin.tie(NULL)\n#define ll long long\n#define sz(x) (int)((x).size())\n#define all(x) x.begin(),x.end()\nusing namespace std;\n\nint main(){\n\tfastio;\n\tint n,k;\n\tcin>>n>>k;\n\tvector<int> a(n);\n\tfor (int&v:a){\n\t\tstring s;\n\t\tcin>>s;\n\t\tfor (int i=0;i<sz(s);++i){\n\t\t\tif (s[i]=='1'){\n\t\t\t\tv|=1<<(sz(s)-i-1);\n\t\t\t}\n\t\t}\n\t}\n\tint re=31;\n\tfor (int i=0;i<n;++i){\n\t\tfor (int j=i+1;j<n;++j){\n\n\t\t\tre=min(re,__builtin_popcount(a[i]^a[j]));\n\t\t}\n\t}\n\tcout<<re<<'\\n';\n}\n",
  "2162":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nvector<int> a;\nint n;\n\nint root(int x){\n\twhile (a[x]!=x) x=a[x]=a[a[x]];\n\treturn x;\n}\n\nint main(){\n\tfastio;\n\tcin>>n;\n\ta.assign(n,0);\n\tiota(a.begin(),a.end(),0);\n\tint cnt = 0, i=0;\n\twhile (cnt<n){\n\t\ti = root(i);\n\t\ti= (i+1)%n;\n\t\ti = root(i);\n\t\tif (cnt!=0) cout<<' ';\n\t\tcout<<i+1;\n\t\ta[i]=root((i+1)%n);\n\t\ti= (i+1)%n;\n\t\t++cnt;\n\t}\t\n\tcout<<'\\n';\n    return 0;\n}",
  "2163":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nvector<int> st;\nint n,k;\n\nvoid update(int tl, int tr, int idx,int val, int curr){\n\tif (tl>idx || tr <idx) return;\n\tif (tl==tr) {\n\t\tst[curr]=val;\n\t\treturn;\n\t}\n\tint mid = (tl+tr)/2;\n\tupdate(tl,mid,idx,val,curr*2);\n\tupdate(mid+1,tr,idx,val,curr*2+1);\n\tst[curr]=st[curr*2]+st[curr*2+1];\n}\n\nint get(int tl, int tr, int l, int r, int curr){\n\tif (l>r) return 0;\n\tif (tl==l && tr==r) return st[curr];\n\tint mid = (tl+tr)/2;\n\treturn get(tl,mid,l,min(r,mid),curr*2)+get(mid+1,tr,max(l,mid+1),r,curr*2+1);\n}\n\nint getIdx(int vtidx){\n\tint l=0,r=n-1;\n\twhile (l<r){\n\t\tint mid = (l+r)/2;\n\t\tint x=get(0,n-1,0,mid,1);\n\t\tif (x>=vtidx+1) r=mid;\n\t\telse l=mid+1;\n\t}\n\treturn l;\n}\n\nint main(){\n\tfastio;\n\tcin>>n>>k;\n\tst.assign(4*n,0);\n\tfor (int i=0;i<n;++i){\n\t\tupdate(0,n-1,i,1,1);\n\t}\n\tint prev=0;\n\twhile (st[1]) {\n\t\tint i;\n\t\tfor (i=(k-prev)%st[1];i<st[1];i+=k%st[1]) {\n\t\t\tint x=getIdx(i);\n\t\t\tupdate(0,n-1,x,0,1);\n\t\t\tcout<<x+1;\n\t\t\tif (st[1]==0) break;\n\t\t\tcout<<' ';\n\t\t\tprev=st[1]-i;\n\t\t}\n\t}\n\tcout<<'\\n';\n    return 0;\n}",
  "2164":
    "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int n,int k){\n\tint curr=n,cnt=0,f=2,step=1,s=1;\n\twhile (k>cnt+(curr+2-f)/2){\n\t\tint tmp=(curr+2-f)/2;\n\t\tcnt+=tmp;\n\t\tif (f==1) s+=(1<<(step-1));\n\t\tif (curr%2) f=3-f;\n\t\tcurr-=tmp;\n\t\t++step;\n\t}\n\tif (f==2) s+=(1<<(step-1));\t\n\treturn s+(1<<step)*(k-cnt-1);\n}\n\nint main(){\n\t// ios::sync_with_stdio(false);cin.tie(NULL);\n\tint q;\n\tcin>>q;\n\tfor (int i=0;i<q;++i){\n\t\tint n,k;\n\t\tcin>>n>>k;\n\t\tcout<<solve(n,k)<<'\\n';\n\t}\n\treturn 0;\n}",
  "2166":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nstruct Node{\n\tll pre;\n\tll addend;\n};\n\nvector<Node> st;\nvector<ll> a;\nint n,q;\n\nvoid buildTree(int v,int tl, int tr){\n\tif (tl==tr){\n\t\tst[v].pre=a[tl];\n\t\treturn;\n\t}\n\tint mid = (tl+tr)>>1;\n\tbuildTree(v*2,tl,mid);\n\tbuildTree(v*2+1,mid+1,tr);\n\tst[v].pre=max(st[v*2].pre,st[v*2+1].pre);\n}\n\nvoid push(int v) {\n\tst[v*2].pre+=st[v].addend;\n\tst[v*2+1].pre+=st[v].addend;\n\tst[v*2].addend+=st[v].addend;\n\tst[v*2+1].addend+=st[v].addend;\n\tst[v].addend=0;\t\n}\n\nll get(int v, int l, int r, int tl, int tr){\n\tif(tl==l&&tr==r){\n\t\treturn st[v].pre;\n\t}\n\tif (l>r) return -1e18;\n\tpush(v);\n\tint mid = (tl+tr)>>1;\n\treturn max(get(v*2,l,min(r,mid),tl,mid),get(v*2+1,max(mid+1,l),r,mid+1,tr));\n}\n\nvoid update(int v, int l, int r, int tl, int tr, int add){\n\tif (l>r) return;\n\tif (l==tl&&r==tr) {\n\t\tst[v].pre+=add;\n\t\tst[v].addend+=add;\n\t}\n\telse {\n\t\tpush(v);\n\t\tint mid =(tl+tr)>>1;\n\t\tupdate(v*2,l,min(r,mid),tl,mid,add);\n\t\tupdate(v*2+1,max(l,mid+1),r,mid+1,tr,add);\n\t\tst[v].pre=max(st[v*2].pre,st[v*2+1].pre);\n\t}\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tcin>>n>>q;\n\ta.assign(n,0);\n\tvector<int>v(n);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>v[i];\n\t\ta[i]=v[i];\n\t\tif (i) a[i]+=a[i-1];\n\t}\n\tst.assign(4*n,Node({0,0}));\n\tbuildTree(1,0,n-1);\n\tfor (int i=0;i<q;++i){\n\t\tint t;cin>>t;\n\t\tif (t==2){\n\t\t\tint x,y;cin>>x>>y;--x;--y;\n\t\t\tll re=get(1,x,y,0,n-1);\n\t\t\tif (x) re-=get(1,x-1,x-1,0,n-1);\n\t\t\tcout<<max(re,0LL)<<'\\n';\n\t\t}\n\t\telse{\n\t\t\tassert(t==1);\n\t\t\tint k,u;\n\t\t\tcin>>k>>u;--k;\n\t\t\tupdate(1,k,n-1,0,n-1,u-v[k]);\n\t\t\tv[k]=u;\n\t\t}\n\t}\n\treturn 0;\n}",
  "2168":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nconst int INF=1e9;\nint main() {\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tint n;cin>>n;\n\tvector<array<int,2>> a(n);\n\tvector<array<int,3>> b(n);\n\tvector<array<int,3>> c(n);\n\tvector<int> yidx(n);\n\tfor (int i=0;i<n;++i) {\n\t\tcin>>a[i][0]>>a[i][1];\n\t\tb[i][0]=a[i][0];b[i][1]=-a[i][1];b[i][2]=i;\n\t\tc[i][0]=a[i][1];c[i][1]=-a[i][0];c[i][2]=i;\n\t}\n\tsort(b.begin(), b.end());\n\tsort(c.begin(), c.end());\n\tfor (int i=0;i<n;++i) yidx[b[i][2]]=i;\n\tint mx=-INF;\n\tvector<array<int,2>> s;\n\tfill(a.begin(),a.end(),array<int,2>({0,0}));\n\tfor (int i=0;i<n;++i){\n\t\tarray<int,2>cur={yidx[c[i][2]],c[i][2]};\n\t\twhile (s.size()&&s.back()[0]>cur[0]){\n\t\t\ta[s.back()[1]][1]=1;\n\t\t\ta[cur[1]][0]=1;\n\t\t\ts.pop_back();\n\t\t}\n\t\ta[cur[1]][0]=cur[0]<mx;\n\t\tmx=max(mx,cur[0]);\n\t\ts.push_back(cur);\n\t}\n\tfor (int i=0; i<n; ++i){\n\t\tif (i!=0) cout<<' ';\n\t\tcout<<a[i][0];\n\t}\n\tcout<<'\\n';\n\n\tfor (int i=0; i<n; ++i){\n\t\tif (i!=0) cout<<' ';\n\t\tcout<<a[i][1];\n\t}\n\tcout<<'\\n';\n\treturn 0;\n}",
  "2169":
    "#include <bits/stdc++.h>\n#include <ext/pb_ds/assoc_container.hpp>\n#include <ext/pb_ds/tree_policy.hpp>\n#define ll long long\n#define ordered_set tree<int, null_type,less<int>, rb_tree_tag,tree_order_statistics_node_update>\nusing namespace std;\nusing namespace __gnu_pbds;\n\nconst int INF=1e9;\nint main() {\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tint n;cin>>n;\n\tvector<array<int,2>> a(n);\n\tvector<array<int,3>> b(n);\n\tvector<array<int,3>> c(n);\n\tvector<int> yidx(n);\n\tfor (int i=0;i<n;++i) {\n\t\tcin>>a[i][0]>>a[i][1];\n\t\tb[i][0]=a[i][0];b[i][1]=-a[i][1];b[i][2]=i;\n\t\tc[i][0]=a[i][1];c[i][1]=-a[i][0];c[i][2]=i;\n\t}\n\tsort(b.begin(), b.end());\n\tsort(c.begin(), c.end());\n\tfor (int i=0;i<n;++i) yidx[b[i][2]]=i;\n\n\tordered_set s;\n\tfill(a.begin(),a.end(),array<int,2>({0,0}));\n\tfor (int i=0;i<n;++i){\n\t\tint idx=c[i][2];\n\t\tint cur=yidx[idx];\n\t\tint nless=s.order_of_key(cur);\n\t\tint nbig=s.size()-nless;\n\t\ta[idx][0]=nbig;\n\t\ta[idx][1]=cur-nless;\n\t\ts.insert(cur);\n\t}\n\tfor (int i=0; i<n; ++i){\n\t\tif (i!=0) cout<<' ';\n\t\tcout<<a[i][0];\n\t}\n\tcout<<'\\n';\n\n\tfor (int i=0; i<n; ++i){\n\t\tif (i!=0) cout<<' ';\n\t\tcout<<a[i][1];\n\t}\n\tcout<<'\\n';\n\treturn 0;\n}",
  "2181":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst int MOD = 1000000007;\nvector<vector<ll>> dp;\nll suplement(vector<ll>& row,ll state,ll i) {\n\tll re=0;\n\twhile (i<state){\n\t\tif (i&state) {\n\t\t\ti<<=1;\n\t\t\twhile (i&state){\n\t\t\t\tll nstate=state^(i+(i>>1));\n\t\t\t\ti<<=1;\n\t\t\t\tre= (re+row[nstate]+suplement(row,nstate,i))%MOD;\n\t\t\t}\n\t\t}\n\t\ti<<=1;\n\t}\n\treturn re;\n}\nint main(){\n\tll n,m;\n\tcin>>n>>m;\n\tll mxn=1LL<<n;\n\tdp.assign(m+1,vector<ll>(mxn,0));\n\tdp[0][(mxn)-1]=1;\n\tfor (int r=1;r<=m;++r) {\n\t\tfor (ll state=0;state<mxn;++state) \n\t\t\tdp[r][state]=(dp[r][state]+dp[r-1][state^(mxn-1)])%MOD;\n\t\tfor (ll state=mxn-1;state>=0;--state) \n\t\t\tdp[r][state]=(dp[r][state]+suplement(dp[r],state,1))%MOD;\n\t\t\n\t}\n\tcout<<dp[m][mxn-1]<<'\\n';\n    return 0;\n}",
  "2182":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll M=1000000007;\nll binpow(ll x,ll y,ll m){\n\tll re=1;\n\twhile(y){\n\t\tif (y&1) re=(re*x)%m;\n\t\ty>>=1;\n\t\tx=(x*x)%m;\n\t}\n\treturn re;\n}\nll sumTo(ll n,ll m){\n\treturn (n*(n+1)/2)%m;\n}\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tint n;\n\tcin>>n;\n\tvector<ll> invFac(n+1,1);\n\tvector<ll> fac(n+1,1);\n\tvector<array<int,2>> p(n);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>p[i][0]>>p[i][1];\n\t}\n\t\n\tbool hasDiv2=false;\n\tll numOfDivisor=1;\n\tll numOfDivisor_1=1;\n\tfor (int i=0;i<n;++i){\n\t\tnumOfDivisor=(numOfDivisor*(p[i][1]+1))%M;\n\t\tif (p[i][1]%2&&!hasDiv2){\n\t\t\tnumOfDivisor_1=(numOfDivisor_1*((p[i][1]+1)/2))%(M-1);\n\t\t\thasDiv2=true;\n\t\t}\n\t\telse\n\t\t\tnumOfDivisor_1=(numOfDivisor_1*(p[i][1]+1))%(M-1);\n\t}\n\tcout<<numOfDivisor<<'\\n';\n\n\tll sumOfDivisor=1;\n\tfor (int i=0;i<n;++i){\n\t\tsumOfDivisor=(sumOfDivisor*(binpow(p[i][0],p[i][1]+1,M)-1)%M*binpow(p[i][0]-1,M-2,M)%M+M)%M;\n\t}\n\tcout<<sumOfDivisor<<'\\n';\n\n\tll productOfDivisor=1;\n\tfor (int i=0;i<n;++i){\n\t\tif (!hasDiv2) p[i][1]/=2;\n\t\tproductOfDivisor=(productOfDivisor*binpow(p[i][0],p[i][1]*numOfDivisor_1%(M-1),M)%M);\n\t}\n\n\tcout<<productOfDivisor<<'\\n';\n\treturn 0;\n}",
  "2183":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nint main(){\n\tfastio;\n\tint n;\n\tcin>>n;\n\tvector<int> a(n);\n\tfor (int &v:a)cin>>v;\n\tsort(a.begin(),a.end());\n\tll s=0;\n\tfor (int &v:a){\n\t\tif (v>s+1) {\n\t\t\tcout<<s+1<<'\\n';\n\t\t\treturn 0;\n\t\t}\n\t\ts+=v;\n\t}\n\tcout<<s+1<<'\\n';\n    return 0;\n}",
  "2185":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nll n,k;\nll l[20];\nll gett(int idx,int ck,int cnt,ll curr){\n\tif (cnt==ck)\n\t\treturn n/curr;\n\tif (idx==k)\n\t\treturn 0;\n\tif (n/l[idx]+1<curr) return gett(idx+1,ck,cnt,curr);\n\treturn gett(idx+1,ck,cnt,curr)+ gett(idx+1,ck,cnt+1,curr*l[idx]);\n}\nint main(){\n\tcin>>n>>k;\n\tfor (int i=0;i<k;++i)cin>>l[i];\n\tll re=0;\n\tll tmp=1;\n\tfor (int i=1;i<=k;++i){\n\t\tre+=tmp*gett(0,i,0,1);\n\t\ttmp*=-1;\n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "2187":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nll M=1000000007;\nvector<ll> invFac;\nvector<ll> fac;\n\nll binpow(ll x,ll y,ll m){\n\tll re=1;\n\twhile(y){\n\t\tif (y&1) re=(re*x)%m;\n\t\ty>>=1;\n\t\tx=(x*x)%m;\n\t}\n\treturn re;\n}\nll C(int n, int k){\n\treturn fac[n]*invFac[k]%M*invFac[n-k]%M;\n}\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tint n;\n\tcin>>n;\n\tif (n%2){\n\t\tcout<<0<<'\\n';\n\t\treturn 0;\n\t}\n\tstring s;\n\tcin>>s;\n\tint k=0;\n\tfor (char &c:s){\n\t\tif (c=='(') k+=1;\n\t\telse{\n\t\t\tk-=1;\n\t\t\tif (k<0){\n\t\t\t\tcout<<0<<'\\n';\n\t\t\t\treturn 0;\n\t\t\t}\n\t\t}\n\t\t--n;\n\t}\n\tif (n<k){\n\t\tcout<<0<<'\\n';\n\t\treturn 0;\n\t}\n\tfac.assign(n+1,1);\n\tinvFac.assign(n+1,1);\n\tfor (int i=2;i<=n;++i){\n\t\tfac[i]=fac[i-1]*i%M;\n\t\tinvFac[i]=binpow(fac[i],M-2,M);\n\t}\n\tn=(n-k)/2;\n\tif (n==0){\n\t\tcout<<1<<'\\n';\n\t\treturn 0;\n\t}\n\tll re=C(2*n+k,n)-C(2*n+k,n-1)+M;\n\tre%=M;\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "2206":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst int INF=2e9;\n\nvoid buildTree(int v, int tl, int tr,vector<int>&st,vector<int>&a){\n\tif (tl==tr){\n\t\tst[v]=a[tl];\n\t\treturn;\n\t}\n\tint mid = (tl+tr)>>1;\n\tbuildTree(v*2,tl,mid,st,a);\n\tbuildTree(v*2+1,mid+1,tr,st,a);\n\tst[v]=min(st[v*2],st[v*2+1]);\n}\n\nint get(int v, int l, int r, int tl, int tr,vector<int>&st){\n\tif (l>r) return INF;\n\tif (tl==l&&tr==r)return st[v];\n\tint mid=(tl+tr)>>1;\n\treturn min(get(v*2,l,min(mid,r),tl,mid,st),get(v*2+1,max(l,mid+1),r,mid+1,tr,st));\n}\n\nvoid update(int v, int tl, int tr, int pos,vector<int>&st,vector<int>&a){\n\tif (tl==tr){\n\t\tst[v]=a[pos];\n\t\treturn;\n\t}\n\tint mid=(tl+tr)>>1;\n\tif (pos<=mid) update(v*2,tl,mid,pos,st,a);\n\telse update(v*2+1,mid+1,tr,pos,st,a);\n\tst[v]=min(st[v*2],st[v*2+1]);\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tint n,q;\n\tcin>>n>>q;\n\tvector<int> a1(n),a2(n),a(n);\n\tfor(int i=0;i<n;++i){\n\t\tcin>>a[i];\n\t\ta1[i]=a[i]-i-1;\n\t\ta2[i]=a[i]-n+i;\n\t}\n\tvector<int>st1(n*4),st2(n*4);\n\tbuildTree(1,0,n-1,st1,a1);\n\tbuildTree(1,0,n-1,st2,a2);\n\tfor (int i=0;i<q;++i){\n\t\tint t,pos;cin>>t>>pos;--pos;\n\t\tif (t==2){\n\t\t\tint re1=get(1,0,pos,0,n-1,st1)-a1[pos];\n\t\t\tint re2=get(1,pos,n-1,0,n-1,st2)-a2[pos];\n\t\t\tcout<<min(re1,re2)+a[pos]<<'\\n';\n\t\t}\n\t\telse {\n\t\t\tint val;cin>>val;\n\t\t\ta1[pos]+=val-a[pos];\n\t\t\ta2[pos]+=val-a[pos];\n\t\t\ta[pos]=val;\n\t\t\tupdate(1,0,n-1,pos,st1,a1);\n\t\t\tupdate(1,0,n-1,pos,st2,a2);\n\t\t}\n\t}\n\treturn 0;\n}",
  "2207":
    '#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\n\nconst int maxn=2000;\nll g[maxn+1];\n\nvoid setG(){\n\tg[0]=0;\n\tfor (int i=1;i<=maxn;++i){\n\t\tset<int>tmp;\n\t\tfor (int j=1;j*2<i;++j){\n\t\t\ttmp.insert(g[j]^g[i-j]);\n\t\t}\n\t\tfor ( g[i]=0;!tmp.empty();++g[i]){\n\t\t\tif (g[i]!=*(tmp.begin())) break;\n\t\t\ttmp.erase(tmp.begin());\n\t\t}\n\t}\n}\n\nvoid solve(int n){\n\tcout<<((n<=2000&&g[n]==0)?"second":"first")<<\'\\n\';\n}\n\nint main(){\n\tsetG();\n\tint t;cin>>t;\n\twhile (t--){\n\t\tint n;cin>>n;\n\t\tsolve(n);\n\t}\n\treturn 0;\n}',
  "2208":
    '#include <bits/stdc++.h>\nusing namespace std;\n\nvoid solve(int n){\n\tbool o=false;\n\twhile (n--){\n\t\tint x;cin>>x;\n\t\tif (x%2)o=true;\n\t}\n\tcout<<(o?"first":"second")<<\'\\n\';\n}\n\nint main(){\n\tint t;cin>>t;\n\twhile (t--){\n\t\tint n;cin>>n;\n\t\tsolve(n);\n\t}\n\treturn 0;\n}',
  "2216":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nint main(){\n\tfastio;\n\tint n;\n\tcin>>n;\n\tvector<pair<int,int>> a(n);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>a[i].first;\n\t\ta[i].second=i;\n\t}\n\tsort(a.begin(),a.end());\n\tll re=1;\n\tfor (int i=1;i<n;++i){\n\t\tif (a[i].second < a[i-1].second) ++re;\n\t}\n\tcout<<re<<'\\n';\n    return 0;\n}",
  "2217":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false); cin.tie(NULL)\nusing namespace std;\n\nvector<pair<int,int>> a;\nvector<int> arr;\nint n,q;\n\nint change(int pos, int num){\n\tint re=0;\n\tif (pos>0){\n\t\tif (a[pos-1].second < a[pos].second && a[pos-1].second >= num) ++re;\n\t\tif (a[pos-1].second > a[pos].second && a[pos-1].second <= num) --re;\n\t}\n\tif (pos<n-1) {\n\t\tif (a[pos+1].second < a[pos].second && a[pos+1].second >= num) --re;\n\t\tif (a[pos+1].second > a[pos].second && a[pos+1].second <= num) ++re;\n\t}\n\ta[pos].second=num;\n\treturn re;\n}\n\nint main(){\n\tfastio;\n\tcin>>n>>q;\n\tarr.assign(n,0);\n\ta.assign(n,{0,0});\n\tfor (int i=0;i<n;++i){\n\t\tcin>>arr[i];\n\t\ta[i].first=arr[i];\n\t\ta[i].second=i;\n\t}\n\tsort(a.begin(),a.end());\n\tll re=1;\n\n\tfor (int i=1;i<n;++i){\n\t\tif (a[i].second < a[i-1].second) ++re;\n\t}\n\n\tfor (int i=0;i<q;++i){\n\t\tint x,y;\n\t\tcin>>x>>y;--x;--y;\n\t\tauto it1 = lower_bound(a.begin(),a.end(),make_pair(arr[x],-1));\n\t\tauto it2 = lower_bound(a.begin(),a.end(),make_pair(arr[y],-1));\n\t\tint ox=(*it1).second,oy=(*it2).second;\n\t\tre+=change(it1-a.begin(),oy);\n\t\tre+=change(it2-a.begin(),ox);\n\t\tswap(arr[x],arr[y]);\n\t\tcout<<re<<'\\n';\n\t}\n    return 0;\n}\t",
  "2229":
    "#include <bits/stdc++.h>\n#define fastio ios::sync_with_stdio(false);cin.tie(NULL)\n#define ll long long\n#define sz(x) (int)((x).size())\n#define all(x) x.begin(),x.end()\nusing namespace std;\n\nconst ll M=1000000007LL;\nint main(){\n\tfastio;\n\tint n,k;cin>>n>>k;\n\tif (k==0) {\n\t\tcout<<\"1\\n\";\n\t\treturn 0;\n\t}\n\tvector<vector<ll>> dp(n+1,vector<ll>(k+1,-1));\n\tfor (int i=1;i<=n;++i) dp[i][0]=1;\n\tfor (int j=1;j<=k;++j) dp[1][j]=1;\n\tfor (int i=2;i<=n;++i){\n\t\tfor (int j=1;j<=k;++j){\n\t\t\tdp[i][j]=(dp[i-1][j]-((j>=i)?dp[i-1][j-i]:0)+M)%M;\n\t\t\tif (i==n&&j==k) {\n\t\t\t\tcout<<dp[n][k]<<'\\n';\n\t\t\t\treturn 0;\n\t\t\t}\n\t\t\tdp[i][j]=(dp[i][j]+dp[i][j-1])%M;\n\t\t}\n\t}\n}",
  "2413":
    "#include <bits/stdc++.h>\n#define ll long long\n\nusing namespace std;\nconst ll MOD = 1000000007;\nconst int maxn = 1e6+0.5;\nll dp[maxn+1];\nint main() {\n\tdp[0]=1;dp[1]=2;\n\tll acu1=3, acu2=1;\n\tfor (int i=2;i<=maxn; ++i) {\n\t\tacu2=(acu2*3+dp[i-1])%MOD;\n\t\tdp[i]=(acu1+acu2)%MOD;\n\t\tacu1=(acu1+dp[i])%MOD;\n\t}\n\tint t;\n\tcin>>t;\n\tfor (int i=0;i<t;++i) {\n\t\tint x;cin>>x;\n\t\tcout<<dp[x]<<'\\n';\n\t}\n\treturn 0;\n}",
  "2416":
    "#include <bits/stdc++.h>\n#define ll long long\n#define fastio ios::sync_with_stdio(false);cin.tie(NULL)\nusing namespace std;\n\nconst int INF=1e9;\n\nint n,q;\nvector<int>a;\nvector<int>p;\nvector<ll>acu;\nvector<ll> F;\n\nll sumr(int l, int r){\n\treturn acu[r+1]-acu[l];\n}\n\nll sum(int idx){\n\tll re=0;\n\tfor (int i=idx;i>=0;i=(i&(i+1))-1){\n\t\tre+=F[i];\n\t}\n\treturn re;\n}\n\nll sum(int l,int r){\n\treturn sum(r)-sum(l-1);\n}\n\nvoid increase(int idx, ll add){\n\tfor (int i=idx;i<n;i=(i|(i+1))){\n\t\tF[i]+=add;\n\t}\n}\n\nint main(){\n\tfastio;\n\tcin>>n>>q;\n\ta.assign(n,0);\n\tF.assign(n,0);\n\tp.assign(n,-1);\n\tacu.assign(n+1,0);\n\tfor (int i=0;i<n;++i){\n\t\tcin>>a[i];\n\t\tacu[i+1]=acu[i]+a[i];\n\t}\n\t\n\tvector<array<int,2>> st;\n\tfor (int i=0;i<n;++i){\n\t\twhile (st.size()&&st.back()[0]<a[i]){\n\t\t\tp[st.back()[1]]=i-1;\n\t\t\tst.pop_back();\n\t\t}\n\t\tst.push_back({a[i],i});\n\t}\n\twhile (st.size()){\n\t\tp[st.back()[1]]=n-1;\n\t\tst.pop_back();\n\t}\n\t\n\tdeque<int> ans;\n\tfor (int i=0;i<n;i=p[i]+1){\n\t\tans.push_back(i);\n\t\tincrease(i,1LL*(p[i]-i+1)*a[i]);\n\t}\n\tvector<array<int,3>> query;\n\tfor (int i=0;i<q;++i){\n\t\tint l,r;cin>>l>>r;--l;--r;\n\t\tquery.push_back({l,r,i});\n\t}\n\tsort(query.begin(),query.end());\n\t\n\tstack<int>tmp;\n\tvector<ll> re(q,-1);\n\tfor (int i=0;i<q;++i){\n\t\tint l=query[i][0],r=query[i][1],idx=query[i][2];\n\t\twhile (l>ans[0]){\n\t\t\tint cur=ans[0]+1;\n\t\t\tans.pop_front();\n\t\t\tint nxt=(ans.size()>0)?ans[0]:n;\n\t\t\twhile (cur<nxt){\n\t\t\t\ttmp.push(cur);\n\t\t\t\tincrease(cur,1LL*(p[cur]-cur+1)*a[cur]);\n\t\t\t\tcur=p[cur]+1;\n\t\t\t}\n\t\t\twhile (!tmp.empty()){\n\t\t\t\tans.push_front(tmp.top());\n\t\t\t\ttmp.pop();\n\t\t\t}\n\t\t}\n\t\tauto it=upper_bound(ans.begin(),ans.end(),r);\n\t\tint e=ans[prev(it)-ans.begin()];\n\t\tre[idx]=sum(l,r)-1LL*a[e]*(p[e]-r)-sumr(l,r);\n\t\t\n\t}\n\tfor (int i=0;i<q;++i) cout<<re[i]<<'\\n';\n\t\n}",
  "2417":
    "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst int maxn=1000000;\n\nvector<int> p(maxn+1,1);\nint m[maxn+1]={0};\n\nvoid sieve(){\n\tfor (int i=2;i<=maxn;++i) {\n\t\tll j=i*i;\n\t\tif (j>maxn) break;\n\t\tif (p[i]!=1) continue;\n\t\twhile (j<=maxn){\n\t\t\tif (p[j]==1) p[j]=i;\n\t\t\tj+=i;\n\t\t}\n\t}\n}\n\nvector<int> primeFac(int x){\n\tvector<int> re;\n\twhile (p[x]!=1){\n\t\tre.push_back(p[x]);\n\t\tint tmp=p[x];\n\t\twhile (x%tmp==0){\n\t\t\tx/=tmp;\n\t\t}\n\t}\n\tif (x!=1) re.push_back(x);\n\treturn re;\n}\n\nll Set(const vector<int>&a, int curr, int idx, int cnt){\n\tll re=0;\n\tif (idx==a.size()){\n\t\tif (curr>1){\n\t\t\tre= ((cnt%2)?1:-1) * m[curr];\n\t\t\t++m[curr];\n\t\t}\n\t}\n\telse{\n\t\tre=Set(a,curr*a[idx],idx+1,cnt+1)+Set(a,curr,idx+1,cnt);\n\t}\n\treturn re;\n}\n\nint main(){\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tsieve();\n\tll n;cin>>n;\n\tll re = (n-1)*n/2;\n\tfor (int i=0;i<n;++i){\n\t\tint a;cin>>a;\n\t\tre-=Set(primeFac(a),1,0,0);\n\t}\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "2428":
    "#include <bits/stdc++.h>\n#define ll long long\n\nusing namespace std;\n\nint main() {\n\tios::sync_with_stdio(false);cin.tie(NULL);\n\tint n,k;\n\tcin>>n>>k;\n\t\n\tvector<int>arr(n);\n\tmap<int,int> m;\n\tll re = 0;\n\n\tint beg=0;\n\tfor (int i=0; i<n; ++i) {\n\t\tcin>>arr[i];\n\t\tif (m.find(arr[i])==m.end() && m.size()==k) {\n\t\t\twhile (beg<=i) {\n\t\t\t\tauto it = m.find(arr[beg]);\n\t\t\t\t--(*it).second;\n\t\t\t\t++beg;\n\t\t\t\tif ((*it).second==0) {\n\t\t\t\t\tm.erase(it);\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t++m[arr[i]];\n\t\tll n1=i-beg+1;\n\t\tre+= n1;\n\t}\n\n\tcout<<re<<'\\n';\n\treturn 0;\n}",
  "2431":
    "#include <bits/stdc++.h>\n#define ll long long\n\nusing namespace std;\n\nchar solve(ll k) {\n\tll curr=0;\n\tll ten=9;\n\tll i =1;\n\twhile (true){\n\t\tif (k<=curr+ten*i) break;\n\t\tcurr+=ten*i;\n\t\t++i;\n\t\tten*=10LL;\n\t}\n\tcurr = k-curr-1;\n\treturn to_string(curr/i+ten/9)[curr%i];\n}\n\nint main(){\n\tint q;cin>>q;\n\tll k;\n\tfor (int i=0; i<q; ++i) {\n\t\tcin>>k;\n\t\tcout<<solve(k)<<'\\n';\n\t}\n\treturn 0;\n}",
};

interface Problem {
  id: number; // Unique identifier for the problem
  name: string; // Problem name
  question: string; // Problem description or question
  tags: string; // Tags or categories associated with the problem
  solution: string;
}
export const csesData: Problem[] = problems.map((problem) => ({
  ...problem,
  solution: solutions[String(problem.id)] || "Solution not available yet.",
}));
