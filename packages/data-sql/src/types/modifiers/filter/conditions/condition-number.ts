import type { AbstractSqlQueryFnNode } from '../../../nodes/fn.js';
import type { ValueNode } from '../../../parameterized-statement.js';
import type { AbstractSqlQueryNode } from '../../../utils.js';
import type { AbstractSqlQuerySelectNode } from '../../../nodes/primitive.js';

/**
 * Filter rows where a numeric column is equal, greater than, less than, etc. other given number.
 */
export interface SqlConditionNumberNode extends AbstractSqlQueryNode {
	type: 'condition-number';

	/* The column in question. Optionally a function can be applied. */
	target: AbstractSqlQuerySelectNode | AbstractSqlQueryFnNode;

	/* The operator valid for a comparison against numbers. */
	operation: 'eq' | 'lt' | 'lte' | 'gt' | 'gte';

	/* The number to compare the column value with. Specifies a reference to the list of parameters. */
	compareTo: ValueNode;
}