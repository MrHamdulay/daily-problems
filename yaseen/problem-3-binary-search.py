class Node:
  def __init__(self, value):
    self.value = float(value)
    self.parent = None
    self.children = []

  def addChild(self, child):
    self.children.append(child)

  def __repr__(self):
    return '<value: %s  children: (%s)>' % (self.value, len(self.children))

  @property
  def right(self):
    return self.children[1] if len(self.children) >= 2 else None

  @property
  def left(self):
    return self.children[0] if len(self.children) >= 1 else None

input = '''
1 0
1 2
0 -10
2 1.5
'''

nodes = {'1': Node('1')}
for line in input.split('\n'):
  if line:
    parent, value = line.split()
    if value in nodes:
      node = nodes[value]
    else:
      node = Node(value)
      nodes[value] = node

    node.parent = nodes[parent]
    nodes[parent].addChild(node)

def isBinarySearchTree(node, left=-1e10, right=1e10):
  if node.value < left or node.value > right:
    return False

  if node.left and not isBinarySearchTree(node.left, left, min(node.value, right)):
    return False

  if node.right and not isBinarySearchTree(node.right, max(node.value, left), right):
    return False

  return True

print isBinarySearchTree(nodes['1'])
