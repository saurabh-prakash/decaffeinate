import { CompoundAssignOp, Node } from 'decaffeinate-parser/dist/nodes';
import { PatcherClass } from '../../patchers/NodePatcher';
import TransformCoffeeScriptStage from '../TransformCoffeeScriptStage';
import PassthroughPatcher from './../../patchers/PassthroughPatcher';
import ArrayInitialiserPatcher from './patchers/ArrayInitialiserPatcher';
import AssignOpPatcher from './patchers/AssignOpPatcher';
import AsyncFunctionPatcher from './patchers/AsyncFunctionPatcher';
import AwaitPatcher from './patchers/AwaitPatcher';
import AwaitReturnPatcher from './patchers/AwaitReturnPatcher';
import BinaryOpPatcher from './patchers/BinaryOpPatcher';
import BlockPatcher from './patchers/BlockPatcher';
import BoolPatcher from './patchers/BoolPatcher';
import BoundAsyncFunctionPatcher from './patchers/BoundAsyncFunctionPatcher';
import BoundFunctionPatcher from './patchers/BoundFunctionPatcher';
import BoundGeneratorFunctionPatcher from './patchers/BoundGeneratorFunctionPatcher';
import BreakPatcher from './patchers/BreakPatcher';
import ChainedComparisonOpPatcher from './patchers/ChainedComparisonOpPatcher';
import ClassAssignOpPatcher from './patchers/ClassAssignOpPatcher';
import ClassPatcher from './patchers/ClassPatcher';
import CompoundAssignOpPatcher from './patchers/CompoundAssignOpPatcher';
import ConditionalPatcher from './patchers/ConditionalPatcher';
import ConstructorPatcher from './patchers/ConstructorPatcher';
import ContinuePatcher from './patchers/ContinuePatcher';
import CSXElementPatcher from './patchers/CSXElementPatcher';
import DebuggerPatcher from './patchers/DebuggerPatcher';
import DefaultParamPatcher from './patchers/DefaultParamPatcher';
import DoOpPatcher from './patchers/DoOpPatcher';
import DynamicMemberAccessOpPatcher from './patchers/DynamicMemberAccessOpPatcher';
import ElisionPatcher from './patchers/ElisionPatcher';
import EqualityPatcher from './patchers/EqualityPatcher';
import ExistsOpCompoundAssignOpPatcher from './patchers/ExistsOpCompoundAssignOpPatcher';
import ExistsOpPatcher from './patchers/ExistsOpPatcher';
import ExpansionPatcher from './patchers/ExpansionPatcher';
import ExpOpPatcher from './patchers/ExpOpPatcher';
import ExportAllDeclarationPatcher from './patchers/ExportAllDeclarationPatcher';
import ExportBindingsDeclarationPatcher from './patchers/ExportBindingsDeclarationPatcher';
import ExportDefaultDeclarationPatcher from './patchers/ExportDefaultDeclarationPatcher';
import ExportNamedDeclarationPatcher from './patchers/ExportNamedDeclarationPatcher';
import ExtendsOpPatcher from './patchers/ExtendsOpPatcher';
import FloorDivideOpCompoundAssignOpPatcher from './patchers/FloorDivideOpCompoundAssignOpPatcher';
import FloorDivideOpPatcher from './patchers/FloorDivideOpPatcher';
import ForFromPatcher from './patchers/ForFromPatcher';
import ForInPatcher from './patchers/ForInPatcher';
import ForOfPatcher from './patchers/ForOfPatcher';
import FunctionApplicationPatcher from './patchers/FunctionApplicationPatcher';
import FunctionPatcher from './patchers/FunctionPatcher';
import GeneratorFunctionPatcher from './patchers/GeneratorFunctionPatcher';
import HeregexPatcher from './patchers/HeregexPatcher';
import IdentifierPatcher from './patchers/IdentifierPatcher';
import ImportDeclarationPatcher from './patchers/ImportDeclarationPatcher';
import IncrementDecrementPatcher from './patchers/IncrementDecrementPatcher';
import InOpPatcher from './patchers/InOpPatcher';
import InstanceofOpPatcher from './patchers/InstanceofOpPatcher';
import JavaScriptPatcher from './patchers/JavaScriptPatcher';
import LogicalNotOpPatcher from './patchers/LogicalNotOpPatcher';
import LogicalOpCompoundAssignOpPatcher from './patchers/LogicalOpCompoundAssignOpPatcher';
import LogicalOpPatcher from './patchers/LogicalOpPatcher';
import MemberAccessOpPatcher from './patchers/MemberAccessOpPatcher';
import ModuleSpecifierPatcher from './patchers/ModuleSpecifierPatcher';
import ModuloOpCompoundAssignOpPatcher from './patchers/ModuloOpCompoundAssignOpPatcher';
import ModuloOpPatcher from './patchers/ModuloOpPatcher';
import NewOpPatcher from './patchers/NewOpPatcher';
import NullishCoalescingCompoundAssignOpPatcher from './patchers/NullishCoalescingCompoundAssignOpPatcher';
import ObjectInitialiserMemberPatcher from './patchers/ObjectInitialiserMemberPatcher';
import ObjectInitialiserPatcher from './patchers/ObjectInitialiserPatcher';
import OfOpPatcher from './patchers/OfOpPatcher';
import OptionalChainingSoakedDynamicMemberAccessOpPatcher from './patchers/OptionalChainingSoakedDynamicMemberAccessOpPatcher';
import OptionalChainingSoakedFunctionApplicationPatcher from './patchers/OptionalChainingSoakedFunctionApplicationPatcher';
import OptionalChainingSoakedMemberAccessOpPatcher from './patchers/OptionalChainingSoakedMemberAccessOpPatcher';
import OptionalChainingSoakedNewOpPatcher from './patchers/OptionalChainingSoakedNewOpPatcher';
import OptionalChainingSoakedSlicePatcher from './patchers/OptionalChainingSoakedSlicePatcher';
import ProgramPatcher from './patchers/ProgramPatcher';
import QuasiPatcher from './patchers/QuasiPatcher';
import RangePatcher from './patchers/RangePatcher';
import RegexPatcher from './patchers/RegexPatcher';
import RestPatcher from './patchers/RestPatcher';
import ReturnPatcher from './patchers/ReturnPatcher';
import SeqOpPatcher from './patchers/SeqOpPatcher';
import SlicePatcher from './patchers/SlicePatcher';
import SoakedDynamicMemberAccessOpPatcher from './patchers/SoakedDynamicMemberAccessOpPatcher';
import SoakedFunctionApplicationPatcher from './patchers/SoakedFunctionApplicationPatcher';
import SoakedMemberAccessOpPatcher from './patchers/SoakedMemberAccessOpPatcher';
import SoakedNewOpPatcher from './patchers/SoakedNewOpPatcher';
import SoakedSlicePatcher from './patchers/SoakedSlicePatcher';
import SpreadPatcher from './patchers/SpreadPatcher';
import StringPatcher from './patchers/StringPatcher';
import SuperPatcher from './patchers/SuperPatcher';
import SwitchCasePatcher from './patchers/SwitchCasePatcher';
import SwitchPatcher from './patchers/SwitchPatcher';
import TaggedTemplateLiteralPatcher from './patchers/TaggedTemplateLiteralPatcher';
import ThisPatcher from './patchers/ThisPatcher';
import ThrowPatcher from './patchers/ThrowPatcher';
import TryPatcher from './patchers/TryPatcher';
import UnaryExistsOpPatcher from './patchers/UnaryExistsOpPatcher';
import UnaryMathOpPatcher from './patchers/UnaryMathOpPatcher';
import UnaryOpPatcher from './patchers/UnaryOpPatcher';
import UnaryTypeofOpPatcher from './patchers/UnaryTypeofOpPatcher';
import WhilePatcher from './patchers/WhilePatcher';
import YieldFromPatcher from './patchers/YieldFromPatcher';
import YieldPatcher from './patchers/YieldPatcher';
import YieldReturnPatcher from './patchers/YieldReturnPatcher';

export default class MainStage extends TransformCoffeeScriptStage {
  patcherConstructorForNode(node: Node): PatcherClass | null {
    switch (node.type) {
      case 'Identifier':
        return IdentifierPatcher;

      case 'String':
        return StringPatcher;

      case 'TaggedTemplateLiteral':
        return TaggedTemplateLiteralPatcher;

      case 'Int':
      case 'Float':
      case 'Null':
      case 'Undefined':
        return PassthroughPatcher;

      case 'Break':
        return BreakPatcher;

      case 'Continue':
        return ContinuePatcher;

      case 'Debugger':
        return DebuggerPatcher;

      case 'Quasi':
        return QuasiPatcher;

      case 'FunctionApplication':
        return FunctionApplicationPatcher;

      case 'SoakedFunctionApplication':
        if (this.options.optionalChaining) {
          return OptionalChainingSoakedFunctionApplicationPatcher;
        } else {
          return SoakedFunctionApplicationPatcher;
        }

      case 'MemberAccessOp':
        return MemberAccessOpPatcher;

      case 'DynamicMemberAccessOp':
        return DynamicMemberAccessOpPatcher;

      case 'EQOp':
      case 'NEQOp':
      case 'LTOp':
      case 'GTOp':
      case 'LTEOp':
      case 'GTEOp':
        return EqualityPatcher;

      case 'PostIncrementOp':
      case 'PostDecrementOp':
      case 'PreIncrementOp':
      case 'PreDecrementOp':
        return IncrementDecrementPatcher;

      case 'ObjectInitialiserMember':
        return ObjectInitialiserMemberPatcher;

      case 'ObjectInitialiser':
        return ObjectInitialiserPatcher;

      case 'This':
        return ThisPatcher;

      case 'Yield':
        return YieldPatcher;

      case 'YieldFrom':
        return YieldFromPatcher;

      case 'YieldReturn':
        return YieldReturnPatcher;

      case 'Await':
        return AwaitPatcher;

      case 'AwaitReturn':
        return AwaitReturnPatcher;

      case 'GeneratorFunction':
        return GeneratorFunctionPatcher;

      case 'Function':
        return FunctionPatcher;

      case 'BoundFunction':
        return BoundFunctionPatcher;

      case 'BoundGeneratorFunction':
        return BoundGeneratorFunctionPatcher;

      case 'AsyncFunction':
        return AsyncFunctionPatcher;

      case 'BoundAsyncFunction':
        return BoundAsyncFunctionPatcher;

      case 'Bool':
        return BoolPatcher;

      case 'Conditional':
        return ConditionalPatcher;

      case 'ArrayInitialiser':
        return ArrayInitialiserPatcher;

      case 'Block':
        return BlockPatcher;

      case 'AssignOp':
        return AssignOpPatcher;

      case 'DefaultParam':
        return DefaultParamPatcher;

      case 'CompoundAssignOp':
        switch ((node as CompoundAssignOp).op) {
          case 'LogicalAndOp':
          case 'LogicalOrOp':
            if (this.options.logicalAssignment) {
              return CompoundAssignOpPatcher;
            } else {
              return LogicalOpCompoundAssignOpPatcher;
            }

          case 'ExistsOp':
            if (this.options.logicalAssignment) {
              return NullishCoalescingCompoundAssignOpPatcher;
            } else {
              return ExistsOpCompoundAssignOpPatcher;
            }

          case 'ModuloOp':
            return ModuloOpCompoundAssignOpPatcher;

          case 'FloorDivideOp':
            return FloorDivideOpCompoundAssignOpPatcher;

          default:
            return CompoundAssignOpPatcher;
        }

      case 'Return':
        return ReturnPatcher;

      case 'PlusOp':
      case 'SubtractOp':
      case 'DivideOp':
      case 'MultiplyOp':
      case 'RemOp':
      case 'BitAndOp':
      case 'BitOrOp':
      case 'BitXorOp':
      case 'LeftShiftOp':
      case 'SignedRightShiftOp':
      case 'UnsignedRightShiftOp':
        return BinaryOpPatcher;

      case 'ModuloOp':
        return ModuloOpPatcher;

      case 'Regex':
        return RegexPatcher;

      case 'Heregex':
        return HeregexPatcher;

      case 'ExistsOp':
        return ExistsOpPatcher;

      case 'LogicalAndOp':
      case 'LogicalOrOp':
        return LogicalOpPatcher;

      case 'LogicalNotOp':
        return LogicalNotOpPatcher;

      case 'SoakedMemberAccessOp':
        if (this.options.optionalChaining) {
          return OptionalChainingSoakedMemberAccessOpPatcher;
        } else {
          return SoakedMemberAccessOpPatcher;
        }

      case 'SoakedDynamicMemberAccessOp':
        if (this.options.optionalChaining) {
          return OptionalChainingSoakedDynamicMemberAccessOpPatcher;
        } else {
          return SoakedDynamicMemberAccessOpPatcher;
        }

      case 'ForIn':
        return ForInPatcher;

      case 'ForFrom':
        return ForFromPatcher;

      case 'ForOf':
        return ForOfPatcher;

      case 'While':
        return WhilePatcher;

      case 'NewOp':
        return NewOpPatcher;

      case 'SoakedNewOp':
        if (this.options.optionalChaining) {
          return OptionalChainingSoakedNewOpPatcher;
        } else {
          return SoakedNewOpPatcher;
        }

      case 'InOp':
        return InOpPatcher;

      case 'Slice':
        return SlicePatcher;

      case 'SoakedSlice':
        if (this.options.optionalChaining) {
          return OptionalChainingSoakedSlicePatcher;
        } else {
          return SoakedSlicePatcher;
        }

      case 'Expansion':
        return ExpansionPatcher;

      case 'Elision':
        return ElisionPatcher;

      case 'Rest':
        return RestPatcher;

      case 'Spread':
        return SpreadPatcher;

      case 'Range':
        return RangePatcher;

      case 'Throw':
        return ThrowPatcher;

      case 'UnaryPlusOp':
      case 'UnaryNegateOp':
      case 'BitNotOp':
        return UnaryMathOpPatcher;

      case 'TypeofOp':
        return UnaryTypeofOpPatcher;

      case 'DeleteOp':
        return UnaryOpPatcher;

      case 'UnaryExistsOp':
        return UnaryExistsOpPatcher;

      case 'ClassProtoAssignOp':
        return ClassAssignOpPatcher;

      case 'Super':
        return SuperPatcher;

      case 'Class':
        return ClassPatcher;

      case 'Constructor':
        return ConstructorPatcher;

      case 'Try':
        return TryPatcher;

      case 'Switch':
        return SwitchPatcher;

      case 'SwitchCase':
        return SwitchCasePatcher;

      case 'DoOp':
        return DoOpPatcher;

      case 'Program':
        return ProgramPatcher;

      case 'InstanceofOp':
        return InstanceofOpPatcher;

      case 'OfOp':
        return OfOpPatcher;

      case 'ChainedComparisonOp':
        return ChainedComparisonOpPatcher;

      case 'SeqOp':
        return SeqOpPatcher;

      case 'JavaScript':
        return JavaScriptPatcher;

      case 'FloorDivideOp':
        return FloorDivideOpPatcher;

      case 'ExpOp':
        return ExpOpPatcher;

      case 'ExtendsOp':
        return ExtendsOpPatcher;

      case 'CSXElement':
        return CSXElementPatcher;

      case 'ExportBindingsDeclaration':
        return ExportBindingsDeclarationPatcher;

      case 'ExportDefaultDeclaration':
        return ExportDefaultDeclarationPatcher;

      case 'ExportAllDeclaration':
        return ExportAllDeclarationPatcher;

      case 'ModuleSpecifier':
        return ModuleSpecifierPatcher;

      case 'ImportDeclaration':
        return ImportDeclarationPatcher;

      case 'ExportNamedDeclaration':
        return ExportNamedDeclarationPatcher;

      default:
        return null;
    }
  }
}
