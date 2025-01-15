// coding
/* 1 Dungeon Adventure: You are given a 0-indexed 2D matrix dungeon of size m x n, where each cell (r, c)
 represents: - A wall if dungeon[r][c] = 0, or - A room 
 with dungeon[r][c] treasure if dungeon[r][c] > 0.
  A hero can start from any treasure room (r, c) 
  and can perform the following actions an unlimited
   number of times: - Collect all the treasure in the current room (r, c),
    or - Move to an adjacent room that contains treasure.
     Your task is to help the hero find the maximum treasure they can collect, 
     starting from the best possible treasure room. 
     If there are no treasure rooms in the dungeon, return 0.
An adjacent room to (r, c) is defined as any of the 
following (if they exist): - (r, c + 1) (right) - (r, c - 1)
 (left) - (r + 1, c) (down) - (r - 1, c) (up) */