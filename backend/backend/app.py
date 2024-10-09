from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
api = Api(app)

current_id = 0

def get_id():
    global current_id
    current_id += 1
    return current_id


items = {}


class Stones(Resource):
    def get(self):
        name_query = request.args.get('name', '').lower()
        type_query = request.args.get('type', 'all')
        sort_order = request.args.get('sort', 'not_sort')

        filtred_stones = [
            {**stone, 'id': stone_id} for stone_id, stone in items.items()
            if (type_query == 'all' or stone['type'] == type_query) and
               (name_query in stone['name'].lower())
        ]

        if sort_order == 'ascending':
            filtred_stones.sort(key=lambda x: x['carats'])
        elif sort_order == 'descending':
            filtred_stones.sort(key=lambda x: x['carats'], reverse=True)

        return filtred_stones, 200

    def post(self):
        stone_post_args = reqparse.RequestParser()
        stone_post_args.add_argument('name', type=str, required=True, help="Name is required")
        stone_post_args.add_argument('carats', type=float, required=True,
                                     help="Carats is required and must be a number")
        stone_post_args.add_argument('type', type=str, required=True, help="Type is required")
        stone_post_args.add_argument('price', type=float, required=True, help="Price is required and must be a number")

        items[get_id()] = stone_post_args.parse_args()

        return {'message': 'new stone added', 'new stone': stone_post_args.parse_args()}, 201

    def delete(self, stone_id):
        if stone_id in items.keys():
            items.pop(stone_id)
            return '', 204
        else:
            return {'message': 'Stone not found'}, 404

    def put(self, stone_id):
        if stone_id not in items:
            return {'message': 'Stone not found'}, 404

        stone_put_args = reqparse.RequestParser()
        stone_put_args.add_argument('name', type=str, required=False, help="Name to update")
        stone_put_args.add_argument('carats', type=float, required=False, help="Carats to update")
        stone_put_args.add_argument('type', type=str, required=False, help="Type to update")
        stone_put_args.add_argument('price', type=float, required=False, help="Price to update")

        args = stone_put_args.parse_args()

        if args['name'] is not None:
            items[stone_id]['name'] = args['name']
        if args['carats'] is not None:
            items[stone_id]['carats'] = args['carats']
        if args['type'] is not None:
            items[stone_id]['type'] = args['type']
        if args['price'] is not None:
            items[stone_id]['price'] = args['price']

        return {'message': 'Stone updated', 'updated_stone': items[stone_id]}, 200


api.add_resource(Stones, '/stones', '/stones/<int:stone_id>')

if __name__ == '__main__':
    app.run(debug=True)
